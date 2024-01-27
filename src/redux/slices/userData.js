import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userData",
    initialState:{
        name:"Saurabh",
    },
    reducers:{
        updateUSeerData : (state, action)=>{
            const data = action?.payload;
            return { ...state, name:data}
        }
    }
})

export default userSlice.reducer;
export const { updateUSeerData } = userSlice.actions;