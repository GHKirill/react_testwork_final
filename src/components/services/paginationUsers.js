export const usersToPaginate = (type = 'all', allUsers, followingUsers) => {
  if (type === 'all') {
    return allUsers;
  } else if (type === 'follow') {
    return allUsers.filter(item => !followingUsers.includes(item.id));
  } else if (type === 'following') {
    return allUsers.filter(item => followingUsers.includes(item.id));
  }
  return allUsers;
};
