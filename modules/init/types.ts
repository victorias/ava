import { InitCartAction, AddToCartAction, CartReducer } from '../cart/types';

export type ActionTypes = InitCartAction | AddToCartAction;

export interface RootReducer {
  cart: CartReducer;
}
