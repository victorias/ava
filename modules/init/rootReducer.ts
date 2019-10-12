import cartReducer from '../cart/cartReducer';
import { ActionTypes, RootReducer } from './types';

export default (state = {} as RootReducer, action: ActionTypes) => ({
  cart: cartReducer(state.cart, action),
});
