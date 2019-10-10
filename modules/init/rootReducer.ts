import storeReducer from '../store/storeReducer';

const initialState = {
  store: [],
};

export default (state = initialState, action: any) => ({
  store: storeReducer(state.store, action),
});
