import { configureStore } from "@reduxjs/toolkit";

import { adminApi } from "./api/adminApi";
import { autodhunApi } from "./api/autodhunApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      [autodhunApi.reducerPath]: autodhunApi.reducer,
      [adminApi.reducerPath]: adminApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(autodhunApi.middleware, adminApi.middleware)
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
