import { applyMiddleware, compose, createStore, Store } from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import { RootReducer } from './types';

const logger = (store: Store) => (next: (_: any) => void) => (action: any) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default (preloadedState: RootReducer) => {
  const middlewares = [logger, thunkMiddleware];
  // @ts-ignore idk why this doesn't work and idc
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middleWareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers as any
  );

  return store;
};
