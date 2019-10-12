import { CART_INIT, CART_ADD } from './types';
import { getCheckoutId } from './selectors';
import { ThunkAction } from 'redux-thunk';
import { RootReducer } from '../init/types';
import { Action } from 'redux';
import ShopifyClient from '../shopify/client';

export const addToCart = (
  lineItem: ShopifyBuy.LineItem
): ThunkAction<void, RootReducer, null, Action<string>> => async (
  dispatch,
  getState
) => {
  let checkoutId = getCheckoutId(getState());
  if (checkoutId == null) {
    const checkout = await ShopifyClient.checkout.create();
    dispatch({
      type: CART_INIT,
      checkoutId: checkout.id,
    });
    checkoutId = checkout.id;
  }
  const newCheckout = await ShopifyClient.checkout.addLineItems(checkoutId, [
    lineItem,
  ]);
  console.log(newCheckout.lineItems);
};
