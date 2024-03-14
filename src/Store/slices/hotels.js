import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from './../../axiosConfig/instance';



export const hotelsAction = createAsyncThunk("hotels/getAll",async()=>{
    const res = await axiosInstance.get('/hotels/')

    return res.data.data
})


const hotelsSlicce = createSlice({
    name:"hotels",
    initialState:{hotels:[]},
    extraReducers:(builder)=>{
        builder.addCase(hotelsAction.fulfilled,(state,action)=>{
            state.hotels=action.payload
        })
    }
})

export default hotelsSlicce.reducer