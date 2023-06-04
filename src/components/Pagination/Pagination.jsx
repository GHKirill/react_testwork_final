import { Container, Pagination, TextField, Stack, Link } from '@mui/material';

export const PaginationButtons = ({ usersFiltered, page, changePage }) => {
  console.log(usersFiltered);
  return (
    <Stack spacing={2}>
      {usersFiltered.length && (
        <Pagination
          count={
            usersFiltered.length % 3 === 0
              ? usersFiltered.length / 3
              : Math.ceil(usersFiltered.length / 3)
          }
          page={page}
          onChange={(_, num) => changePage(num)}
        />
      )}
    </Stack>
  );
};
