import storeReducer from '../store/reducers/storeReducer';

const initialState = {
  store: [],
};

export default (state = initialState, action: any) => ({
  store: storeReducer(state.store, action),
});
