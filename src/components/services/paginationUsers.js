export const usersToPaginate = (type = 'all', allUsers, followingUsers) => {
  // console.log('allusers', allUsers);
  // const following = allUsers.filter(item => followingUsers.includes(item.id));
  // console.log('following', following);
  // const follow = allUsers.filter(item => !followingUsers.includes(item.id));
  // console.log('follow', follow);

  console.log(type);
  if (type === 'all') {
    return allUsers;
  } else if (type === 'follow') {
    return allUsers.filter(item => !followingUsers.includes(item.id));
  } else if (type === 'following') {
    return allUsers.filter(item => followingUsers.includes(item.id));
  }
  return allUsers;

  // switch (type) {
  //   case 'all':
  //     return allUsers;
  //   case 'follow':
  //     return allUsers.filter(item => !followingUsers.includes(item.id));
  //   case 'following':
  //     allUsers.filter(item => followingUsers.includes(item.id));
  //     break;
  //   default:
  //     return allUsers;
  // }
};
