import axios from 'axios';

export default (config) => {
  return axios(config).then((response) => response.data);
};
