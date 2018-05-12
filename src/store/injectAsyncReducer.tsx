import { Reducer } from 'redux';
import createReducer from './createReducer';

const injectAsyncReducer = (store: any, name: string, asyncReducer: Reducer<any>) => {
  if (store.asyncReducers[name]) {
    return;
  }
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

export default injectAsyncReducer;
