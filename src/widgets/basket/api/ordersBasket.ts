import { OrdersData } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  value: OrdersData[];
}

const initialState: ProductState = {
  value: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state, action: PayloadAction<OrdersData>) => {
      state.value.push({
        ...action.payload,
      });
    },
    clearOrders: (state) => {
      state.value = [];
   },
  },
});

export const { addOrders, clearOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
