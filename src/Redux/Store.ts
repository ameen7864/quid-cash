import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { LoginApi } from "./ReduxApi";

export const store = configureStore({
  reducer: {
    [LoginApi.reducerPath]: LoginApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LoginApi.middleware),
});

setupListeners(store.dispatch);
