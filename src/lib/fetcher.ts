import axios from 'axios';

const fetcher = async (url: string, payload?: string) => {
  const options = {
    method: payload ? 'POST' : 'GET',
    ...(payload && { data: payload }),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return axios.request({ url, ...options }).then((response) => response.data);
};

export default fetcher;
