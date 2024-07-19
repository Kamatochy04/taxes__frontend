import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import dataRegisterReducer from "./registerSlice";
import SideBar from "./sideBarSlice";
import { api } from "./services/api";
import { listenerMiddleware } from "@/features/auth/midleware/auth";
import dataRegister2Reducer from "./register2Slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    step1: dataRegisterReducer,
    SideBar,
    step2: dataRegister2Reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
