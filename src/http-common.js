import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
};

export default axios.create(config);
