import { combineReducers, Action } from 'redux';

const initState = {
  name: 'react_cli',
  version: '0.1.0'
};

const version = (state = initState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const createReducer = (asyncReducers = {}) => {
  return combineReducers({
    version,
    ...asyncReducers
  });
};

export default createReducer;
