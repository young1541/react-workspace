import { configureStore } from '@reduxjs/toolkit'
import inputSlice from './inputSlice'
import authSlice from './authSlice'
import memberDataSlice from './memberDataSlice'
//inputSlice 정의한 값을 토대로 store(저장소) 생성
const store = configureStore({
    reducer : { //저장소 이름은 input. input에 연결할 reducer
        input : inputSlice.reducer,
        auth : authSlice.reducer,
        memberData : memberDataSlice.reducer
    }
})
export default store
