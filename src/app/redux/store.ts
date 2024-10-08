import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import dataRegisterReducer from "./registerSlice";
import SideBar from "./sideBarSlice";
import { api } from "./services/api";
import dataRegister2Reducer from "./register2Slice";
import { listenerMiddleware } from "@/features/user/midleware/auth";
import counterReducer from "@/widgets/header/api/ProductCounter";
import productReducer from "@/pages/ProductCard/api/ProductCard";
import ordersReducer from "@/widgets/basket/api/ordersBasket";
import userReducer from "@/features/user/userData/userDataSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    step1: dataRegisterReducer,
    SideBar,
    step2: dataRegister2Reducer,
    counter: counterReducer,
    product: productReducer,
    user: userReducer,
    orders: ordersReducer,
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
