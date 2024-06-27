import { configureStore } from "@reduxjs/toolkit";
import dataRegisterReducer from "./registerSlice";

export const store = configureStore({
  reducer: {
    dataRegisterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat().prepend(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
