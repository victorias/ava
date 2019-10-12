import { CartReducer, InitCartAction, CART_INIT } from './types';
import { ActionTypes } from '../init/types';

const initialState: CartReducer = {
  checkoutId: null,
};

const initializeCart = (state: CartReducer, action: InitCartAction) => {
  return {
    ...state,
    checkoutId: action.checkoutId,
  };
};

export default (state = initialState, action: ActionTypes): CartReducer => {
  switch (action.type) {
    case CART_INIT:
      return initializeCart(state, action);
    default:
      return state;
  }
};
