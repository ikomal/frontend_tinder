import { createSlice } from "@reduxjs/toolkit";

const requestslice=createSlice({
    name:"requests",
    initialState:[],
    reducers:{
        addrequest:(state,action)=>{
            return action.payload;
        },
        removerequest:(state,actions)=>{
            return null;
        }
    }
})

export const{addrequest,removerequest}=requestslice.actions;
export default requestslice.reducer;