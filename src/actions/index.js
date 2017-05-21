import axios from 'axios';
import {
  FETCH_REPOS
} from './types';

import {CLIENT_ID, CLIENT_SECRET} from '../constants/github';

export function fetchRepos() {
  const request = axios.get('https://api.github.com/repositories');

  return {
    type: FETCH_REPOS,
    payload: request
  };
}
