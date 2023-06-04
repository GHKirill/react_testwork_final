import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

// const followSlice = createSlice({
//   name: 'follow',
//   initialState,
//   reducers: {
//     changeFollowStatus(state, action) {
//       return state.includes(action.payload)
//         ? state.filter(item => item !== action.payload)
//         : [...state, action.payload];
//     },
//   },
// });
// export const FollowReducer = followSlice.reducer;
// export const { changeFollowStatus } = followSlice.actions;

const initialState = {
  follow: [],
  allContacts: [],
  currentNumber: 3,
  paginationNumber: 0,
};

const followSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {
    changeFollowStatus(state, action) {
      return {
        ...state,
        follow: [
          ...(state.follow.includes(action.payload)
            ? state.follow.filter(item => item !== action.payload)
            : [...state.follow, action.payload]),
        ],
      };
    },
    changeNumberCards(state, action) {
      return {
        ...state,
        currentNumber: state.currentNumber + action.payload,
      };
    },
    addAllContacts(state, action) {
      return {
        ...state,
        allContacts: state.allContacts.length
          ? state.allContacts
          : [...state.allContacts, ...action.payload],
      };
    },
    // addFollowersNumber(state, action) {
    //   return {
    //     ...state,
    //     allContacts: state.allContacts.map(item => {
    //       return item.id === action.payload
    //         ? { ...item, followers: item.followers + 1 }
    //         : item;
    //     }),
    //   };
    // },
    // deсFollowersNumber(state, action) {
    //   return {
    //     ...state,
    //     allContacts: state.allContacts.map(item => {
    //       return item.id === action.payload
    //         ? { ...item, followers: item.followers - 1 }
    //         : item;
    //     }),
    //   };
    // },
    changeFollowersNumber(state, action) {
      const { id, currentFollowersNumber } = action.payload;
      return {
        ...state,
        allContacts: state.allContacts.map(item => {
          return item.id === id
            ? { ...item, followers: currentFollowersNumber }
            : item;
        }),
      };
    },
    paginationUsersNumber(state, action) {
      return {
        ...state,
        paginationNumber: action.payload,
      };
    },
  },
});
export const FollowReducer = followSlice.reducer;
export const {
  changeFollowStatus,
  changeNumberCards,
  addAllContacts,
  // addFollowersNumber,
  // deсFollowersNumber,
  changeFollowersNumber,
  paginationUsersNumber,
} = followSlice.actions;
