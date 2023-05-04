import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../reducers/index.js";
import CartSlice from "./CartSlice.js";
import AuthSlice from "./AuthSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        auth: AuthSlice
    }
});

export default Store;