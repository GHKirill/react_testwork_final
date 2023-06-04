import { CardList } from 'components/CardList/CardList';
import { ButtonStyled } from './TweetsPage.styled';
import { useGetUsersQuery } from 'Redux/services/services';
import { Loader } from 'components/Loader/Loader';

export const TweetsPage = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ButtonStyled to="/">To home</ButtonStyled>
          <CardList data={data} />
        </>
      )}
    </>
  );
};
