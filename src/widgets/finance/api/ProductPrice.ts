import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceState {
  value: number;
}

const initialState: PriceState = {
  value: 0,
};

const priceSlice = createSlice({
  name: "Price",
  initialState,
  reducers: {
    /*increment: (state) => {
      state.value += 1;
    },*/
    reset: (state) => {
      state.value = 0;
    },
    summa: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { summa, reset } = priceSlice.actions;

export default priceSlice.reducer;
