import { createSlice } from '@reduxjs/toolkit'
//state값 변경하는 기능 정의
const inputSlice = createSlice({
    name : "input", //기능 이름( 해당 이름으로 dispatch에서 접근 가능 )
    initialState : { //초기화할 값 정의
        login : {username:"", password:""},
        register : {username:"", password:"", role:""},
        modify : {username:"", password:"", role:""}
    }, 
    reducers:{ //기능 정의
        changeInput : ( state, action ) => {
            const {name, value, form} = action.payload
            state[form][name] = value
        },
        setModifyData : (state, action)=>{
            state.modify = action.payload;
        }
    }
})
export const { changeInput, setModifyData } = inputSlice.actions
export default inputSlice;
