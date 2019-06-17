/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from 'axios';

const callApi = async ({ data, method, url }) => {
  try {
    const response = await axios({
      data,
      method,
      url,
      // url: `${process.env.REACT_APP_URL}${uri}`,
    });
    return response;
  } catch (error) {
    console.error('ERROR IS FOUND--->> ', error);
  }
};

export default callApi;
