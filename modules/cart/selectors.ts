import { RootReducer } from '../init/types';

export const getCheckoutId = (state: RootReducer) => state.cart.checkoutId;
