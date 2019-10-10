import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';

const logger = (store: { getState: () => void }) => (
  next: (_: any) => void
) => (action: { type: string }) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default (preloadedState: any) => {
  const middlewares = [logger];
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
