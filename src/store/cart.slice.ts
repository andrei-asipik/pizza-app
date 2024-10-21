import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const CART_PERSISTENT_STATE = 'cartData';

export interface CartItem {
  id: number;
  count: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((item) => item.id === action.payload);
      if (existed) {
        existed.count++;
      } else {
        state.items.push({ id: action.payload, count: 1 });
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
