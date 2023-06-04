export const FollowUsers = state => state.followContacts.follow;
export const selectNumberCards = state => state.followContacts.currentNumber;
export const selectAllUsers = state => state.followContacts.allContacts;
export const selectPaginationNumber = state =>
  state.followContacts.paginationUsersNumber;
