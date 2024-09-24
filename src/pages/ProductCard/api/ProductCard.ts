import { ProductsResults } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  value: ProductsResults[];
}

const initialState: ProductState = {
  value: [],
};

const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductsResults>) => {
      state.value.push({
        ...action.payload,
      });
    },
    clearProduct: (state) => {
       state.value = [];
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      //   state.value -= 1;
    },
  },
});

export const { addProduct, removeProduct, clearProduct} = productSlice.actions;

export default productSlice.reducer;
