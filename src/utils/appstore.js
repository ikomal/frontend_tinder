import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "./userslice"

const appstore=configureStore({
    reducer:{
        user:useReducer
    }
});

export default appstore;