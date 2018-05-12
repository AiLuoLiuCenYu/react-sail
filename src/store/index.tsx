import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import request from '../utils/request';
import createReducer from './createReducer';

const configureStore = () => {
  const store = createStore(createReducer(), {}, compose(
    applyMiddleware(thunk.withExtraArgument({ request })),
    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    typeof (window as any).devToolsExtension !== 'undefined'
      ? (window as any).devToolsExtension()
      : (f: any) => f
  ));
  (store as any).asyncReducers = {};
  if (process.env.NODE_ENV === 'development') {
    if ((module as any).hot) {
      (module as any).hot.accept('./createReducer', () => store.replaceReducer(createReducer as any));
    }
  }
  return store;
};

export default configureStore();
