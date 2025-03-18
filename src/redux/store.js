import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "cart", storage };
const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: { cart: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { persistor, store };
