import axios from 'axios';
import {authURL} from '../baseURL';

export const authentication = data => axios.post(authURL,data);
