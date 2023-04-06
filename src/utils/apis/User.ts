import axios from '../axios';

const fetchUsersRecords = async () => {
  try {
    const url = '/users';
    const res = await axios.get(url);

    return res.data;
  } catch (err: any) {
    throw err;
  }
};

export default fetchUsersRecords;
