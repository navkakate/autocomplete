import {
  FETCH_REPOS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REPOS:
    console.log('action.payload.data', action.payload.data);
      return [ ...state, ...action.payload.data ];
  }

  return state;
}
