import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6478209f362560649a2d3b5d.mockapi.io';

export const getContacts = createAsyncThunk(
  'fetch/allContacts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/users');
      console.log(response.data);
      return response.data.map(({ id, followers, tweets, avatar }) => ({
        id,
        followers,
        tweets,
        avatar,
      }));
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  'fetch/allContacts',
  async ({ id, followers }, thunkApi) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        followers: followers,
      });
      // const { id, followers } = response.data;
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
