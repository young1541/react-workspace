import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, registerThunk } from '../service/authThunk'
import { createLoadingReducers } from './commonLoadingHandlers'
import { act } from 'react'
const savedAuth = sessionStorage.getItem("auth")
const initialState = { isLoggedIn : false, username : null, loading : false, error : null, result : 0 }
const authSlice = createSlice({
    name : "auth", 
    initialState : savedAuth ? JSON.parse(savedAuth) : initialState , 
    reducers:{ //기능 정의
        logoutAuth : ( state ) => {
            sessionStorage.clear() 
            return initialState
        }
    },
    extraReducers : (builder) => {
        builder.addCase( loginThunk.fulfilled, (state, action ) => {
            console.log("통신 성공")
            state.loading = false;
            state.error = null;
            state.result = action.payload.result // 성공 0, 실패 1
            if( action.payload.result === 0 ){
                state.username = action.payload.username
                state.isLoggedIn = true
                sessionStorage.setItem("auth", JSON.stringify({...state}) )
            }
        })
        createLoadingReducers( builder, loginThunk );
        builder.addCase( registerThunk.fulfilled, (state, action) => {
            console.log("회원가입 : ", action)
            state.result = action.payload;
        })
        createLoadingReducers( builder, registerThunk );
    }
})
export const { loginAuth, logoutAuth } = authSlice.actions
export default authSlice;