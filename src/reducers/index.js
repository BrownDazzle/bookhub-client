import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import bookReducer from "./BookReducer";
import paymentReducer from "./PaymentReducer";
import chatReducer from "./ChatUserReducer";
import CartSlice from "../app/CartSlice";
import CategorySlice from "../app/CategorySlice";

const cart = CartSlice

export const reducers = combineReducers({ authReducer, bookReducer, CategorySlice, chatReducer, cart, paymentReducer })