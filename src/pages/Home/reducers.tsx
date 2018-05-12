import { AnyAction } from 'redux';
import * as types from './constants';

const initState = {
  loading: true,
  data: []
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    case types.LOAD_DATA_REQUEST:
      return { ...state, loading: true };
    case types.LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case types.LOAD_DATA_FAILURE:
      return { ...state, loading: true };
    default:
      return state;
  }
};
