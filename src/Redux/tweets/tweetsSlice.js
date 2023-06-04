import { createSlice } from '@reduxjs/toolkit';
import { getContacts, updateContact } from './operation';

const handlePending = (state, action) => ({
  ...state,
  isLoading: true,
  error: null,
});
const handleRejected = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //==get all contacts

    [getContacts.pending]: handlePending,
    [getContacts.fulfilled](state, action) {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        contacts: [...state.contacts, ...action.payload],
      };
    },
    [getContacts.rejected]: handleRejected,

    //==update contact

    [updateContact.pending]: handlePending,
    [updateContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        contacts: [
          ...state.contacts.map(contact => {
            if (contact.id !== action.payload.id) {
              return contact;
            }
            return { ...contact, followers: action.payload.followers };
          }),
        ],
      };
    },
    [updateContact.rejected]: handleRejected,
  },
});

export default contactsSlice;
export const contactsReducer = contactsSlice.reducer;
