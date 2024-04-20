import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "@/redux/ProductsSlice";
import CartReducer from "@/redux/CartSlice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const reducer = combineReducers({
	products: ProductsReducer,
	cartItems: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
