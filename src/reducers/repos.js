import {
  FETCH_REPOS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REPOS:
      return [ ...state, ...action.payload.data ];
  }

  return state;
}
