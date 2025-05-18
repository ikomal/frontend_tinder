import { createSlice } from "@reduxjs/toolkit";

const feedlsice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>{
            return action.payload;
        },
        removefeed:(state,action)=>{
            return null;
        }
    }
})
export const{addfeed,removefeed}=feedlsice.actions;

export default feedlsice.reducer;