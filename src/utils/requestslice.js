import { createSlice } from "@reduxjs/toolkit";

const requestslice=createSlice({
    name:"requests",
    initialState:[],
    reducers:{
        addrequest:(state,action)=>{
            return action.payload;
        },
        removerequest:(state,action)=>{
            const newarray=state.filter((r)=>r._id != action.payload)
            return newarray;
        }
    }
})

export const{addrequest,removerequest}=requestslice.actions;
export default requestslice.reducer;