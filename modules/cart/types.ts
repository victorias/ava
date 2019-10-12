export interface CartReducer {
  checkoutId: string | number | null;
}

export const CART_INIT = 'cart/init';
export const CART_ADD = 'cart/add';

export interface InitCartAction {
  type: typeof CART_INIT;
  checkoutId: string | number;
  productId?: string | number;
}

export interface AddToCartAction {
  type: typeof CART_ADD;
  productId: string | number;
}
