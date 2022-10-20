import axios from 'axios';

const webforestApiClient =  axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_WEBFOREST_API
});

export default webforestApiClient;