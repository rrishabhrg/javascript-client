/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from 'axios';

const callApi = async ({ data, method, url }) => {
  try {
    const response = await axios({
      data,
      method,
      url,
    });
    console.log('My Response Is:', response);
    console.log('This is try block');
    return response;
  } catch (error) {
    console.log('This is catch block');
    console.error('ERROR IS FOUND--->> ', error);
  }
};

export default callApi;
