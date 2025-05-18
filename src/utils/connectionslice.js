import { createSlice } from "@reduxjs/toolkit";

const connectionslice=createSlice({
    name:"connection",
    initialState:[],
    reducers:{
        addconnection:(state,action)=>{
            return action.payload;
        },
        removeconnection:(state,action)=>{
            return null;
        }

    }
})

export const{addconnection,removeconnection}=connectionslice.actions;
export default connectionslice.reducer;