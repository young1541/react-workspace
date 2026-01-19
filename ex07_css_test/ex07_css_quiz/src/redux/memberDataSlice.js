import { createSlice } from '@reduxjs/toolkit'
import { memberDeleteThunk, memberModifyThunk, memberOneThunk, memberThunk } from '../service/authThunk'
import { createLoadingReducers } from './commonLoadingHandlers'
const memberDataSlice = createSlice({
    name : "memberData", 
    initialState : { data : null, dataOne : null, result : 0 } ,
    extraReducers : (builder) => {
        builder.addCase(memberThunk.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        createLoadingReducers(builder, memberThunk)
        builder.addCase(memberOneThunk.fulfilled,(state,action)=>{
            state.dataOne = action.payload
        })
        createLoadingReducers(builder, memberOneThunk)
        
        builder.addCase(memberDeleteThunk.fulfilled,(state,action)=>{
            state.result = action.payload
        })
        createLoadingReducers(builder, memberDeleteThunk)
        builder.addCase(memberModifyThunk.fulfilled,(state,action)=>{
            state.result = action.payload
        })
        createLoadingReducers(builder, memberModifyThunk)
    }
})
export default memberDataSlice
