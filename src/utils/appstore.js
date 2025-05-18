import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userslice"
import feedReducer from "./feedslice"
import connectionReducer from "./connectionslice"

const appstore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connection:connectionReducer,
    }
});

export default appstore;