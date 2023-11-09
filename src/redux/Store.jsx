import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/slice/Product'
import userReducer from '../redux/slice/Auth'
export const store = configureStore({
    reducer:{
        product : productReducer,
        user: userReducer,
    }
})