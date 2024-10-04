import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  count: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
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
