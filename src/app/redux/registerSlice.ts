import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type DataRegisterUser = {
  first_name: string;
  last_name: string;
  patronymic?: string;
};

const initialState: DataRegisterUser = {
  first_name: "",
  last_name: "",
  patronymic: "",
};

export const dataRegisterUserSlice = createSlice({
  name: "dataRegisterUser",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<DataRegisterUser>) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.patronymic = action.payload.patronymic;
    },
  },
});

export const { setFormData } = dataRegisterUserSlice.actions;
export default dataRegisterUserSlice.reducer;
