import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userslice"
import feedReducer from "./feedslice"

const appstore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer
    }
});

export default appstore;