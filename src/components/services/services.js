import axios from 'axios';

export const changeDBFollowersNumber = async (id, currentFollowersNumber) => {
  try {
    axios.put('https://6478209f362560649a2d3b5d.mockapi.io/users/' + id, {
      followers: currentFollowersNumber,
    });
  } catch (error) {
    console.log(error);
  }
};
