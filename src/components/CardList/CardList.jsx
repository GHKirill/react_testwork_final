import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FollowUsers } from 'Redux/followTweets/selectors';
import { Card } from 'components/Card/Card';
import { BasicSelect } from 'components/Select/Select';
import {
  CardListItem,
  CardListContainer,
  NextButton,
  SelectContainer,
} from './CardList.styled';
import {
  addAllContacts,
  changeNumberCards,
  paginationUsersNumber,
} from 'Redux/followTweets/slice';
import {
  selectAllUsers,
  selectNumberCards,
  selectPaginationNumber,
} from 'Redux/followTweets/selectors';
import { usersToPaginate } from 'components/services/paginationUsers';
import { PaginationButtons } from 'components/Pagination/Pagination';
import { useGetUsersQuery } from 'Redux/services/services';

export const CardList = ({ data }) => {
  const [usersType, setUsersType] = useState('all');
  // const [usersFiltered, setUsersFiltered] = useState([]);
  const [page, setPage] = useState(1);

  const users = useSelector(selectAllUsers);
  const followingUsers = useSelector(FollowUsers);
  const paginationUsers = usersToPaginate(usersType, users, followingUsers);
  //==========================
  // const [usersFiltered, setUsersFiltered] = useState(paginationUsers);
  //=========================
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllContacts(data));
  }, [data, dispatch]);

  const handleSelect = type => {
    const paginationUsers = usersToPaginate(usersType, users, followingUsers);
    setUsersType(type);
    setPage(1);
    // setUsersFiltered(paginationUsers);
  };

  const handlePagination = page => {
    setPage(page);
  };

  const calcStartUsersPage = page === 1 ? 0 : (page - 1) * 3;
  const calcLastUsersPage =
    page === Math.ceil(paginationUsers % 3) && paginationUsers % 3 !== 0
      ? (page - 1) * 3 + (paginationUsers % 3)
      : (page - 1) * 3 + 3;
  console.log(page);
  const calcLastUsersAllPage =
    paginationUsers / 3 <= 1 ? paginationUsers.length - 1 : calcLastUsersPage;
  //================================
  // const currentNumber = useSelector(selectNumberCards);

  // const potentialNumber = users.length - currentNumber;

  // const nextButtonHandle = () => {
  //   const additionalNumber = potentialNumber > 3 ? 3 : potentialNumber;
  //   dispatch(changeNumberCards(additionalNumber));
  //   return additionalNumber;
  // };

  return (
    <>
      {/* {users.slice(0, currentNumber).map(item => ( */}
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
      {/* <PaginationButtons
        usersFiltered={paginationUsers}
        page={page}
        changePage={page => handlePagination(page)}
      /> */}
    </>
  );
};
