import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FollowUsers } from 'Redux/followTweets/selectors';
import { Card } from 'components/Card/Card';
import { BasicSelect } from 'components/Select/Select';
import {
  CardListItem,
  CardListContainer,
  SelectContainer,
} from './CardList.styled';
import { addAllContacts } from 'Redux/followTweets/slice';
import { selectAllUsers } from 'Redux/followTweets/selectors';
import { usersToPaginate } from 'components/services/paginationUsers';
import { PaginationButtons } from 'components/Pagination/Pagination';

export const CardList = ({ data }) => {
  const [usersType, setUsersType] = useState('all');
  const [page, setPage] = useState(1);
  const users = useSelector(selectAllUsers);
  const followingUsers = useSelector(FollowUsers);
  const paginationUsers = usersToPaginate(usersType, users, followingUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllContacts(data));
  }, [data, dispatch]);

  const handleSelect = type => {
    setUsersType(type);
    setPage(1);
  };

  const handlePagination = page => {
    setPage(page);
  };

  const calcStartUsersPage = page === 1 ? 0 : (page - 1) * 3;
  const calcLastUsersPage =
    page === Math.ceil(paginationUsers % 3) && paginationUsers % 3 !== 0
      ? (page - 1) * 3 + (paginationUsers % 3)
      : (page - 1) * 3 + 3;
  const calcLastUsersAllPage =
    paginationUsers / 3 <= 1 ? paginationUsers.length - 1 : calcLastUsersPage;

  return (
    <>
      <CardListContainer>
        {paginationUsers
          .slice(calcStartUsersPage, calcLastUsersAllPage)
          .map(item => (
            <CardListItem key={item.id}>
              <Card
                tweetsNumber={item.tweets}
                followersNumber={item.followers}
                avatar={item.avatar}
                id={item.id}
                user={item.user}
                createdAt={item.createdAt}
              />
            </CardListItem>
          ))}
      </CardListContainer>
      <SelectContainer>
        {paginationUsers.length ? (
          <PaginationButtons
            usersFiltered={paginationUsers}
            page={page}
            changePage={page => handlePagination(page)}
          />
        ) : (
          <div>There are no users in this category</div>
        )}

        <BasicSelect
          usersType={usersType}
          chooseSelect={type => handleSelect(type)}
        />
      </SelectContainer>
    </>
  );
};
