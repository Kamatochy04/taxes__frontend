import { UserData } from "@/model/userData/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../api/userRegister";

const initialState: UserData = {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
  patronymic: "",
  unp: "",
  registration_address: "",
  residential_address: "",
  date_of_birth: "",
  avatar: "",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.patronymic = action.payload.patronymic;
      state.unp = action.payload.unp;
      state.registration_address = action.payload.registration_address;
      state.residential_address = action.payload.residential_address;
      state.date_of_birth = action.payload.date_of_birth;
      state.avatar = action.payload.avatar;
    },
    setUserName: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.patronymic = action.payload.patronymic;
    },
  },
});

export const { setUserData, setUserName } = userDataSlice.actions;
export default userDataSlice.reducer;
