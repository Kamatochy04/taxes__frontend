import { createSlice } from "@reduxjs/toolkit";
type SideState = {
  isShow: boolean;
};

const initialState: SideState = {
  isShow: false,
};

export const SideBarSlice = createSlice({
  name: "SideBarSlice",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { toggleSideBar } = SideBarSlice.actions;
export default SideBarSlice.reducer;
