import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type DataRegister2User = {
  email: string;
  password: string;
  repeat_password: string;
  secret_word: string;
};

const initialState: DataRegister2User = {
  email: "",
  password: "",
  repeat_password: "",
  secret_word: "",
};

export const dataRegister2UserSlice = createSlice({
  name: "dataRegister2User",
  initialState,
  reducers: {
    set2FormData: (state, action: PayloadAction<DataRegister2User>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.repeat_password = action.payload.repeat_password;
      state.secret_word = action.payload.secret_word;
    },
  },
});

export const { set2FormData } = dataRegister2UserSlice.actions;
export default dataRegister2UserSlice.reducer;
