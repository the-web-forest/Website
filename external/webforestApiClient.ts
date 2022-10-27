import axios from 'axios';
import Settings from '../core/settings';

const webforestApiClient = axios.create({
  baseURL: Settings.URL_WEBFOREST_API,
});

export default webforestApiClient;
