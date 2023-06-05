import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const BasicSelect = ({ usersType, chooseSelect }) => {
  const handleChange = event => {
    chooseSelect(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 250, minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Users Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={usersType}
          label="Users Filter"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>All Users</MenuItem>
          <MenuItem value={'following'}>Following Users</MenuItem>
          <MenuItem value={'follow'}>Follow Users</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
