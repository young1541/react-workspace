import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "aaa",
  password: "aaa",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInput(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    extraReducers : (builder) => {}
  },
});

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;


/*
// src/service/authThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";

const data_set = [
  { username: "aaa", password: "aaa", role: "USER" },
  { username: "bbb", password: "bbb", role: "USER" },
  { username: "ccc", password: "ccc", role: "USER" },
];

// 로그인 비동기 처리
export const loginThunk = createAsyncThunk(
  "auth/loginThunk",
  async (user, thunkAPI) => {
    // user = { username, password }
    const found = data_set.find((d) => d.username === user.username);

    // 아이디 없음 or 비번 불일치 => rejected로 보내기
    if (!found || found.password !== user.password) {
      return thunkAPI.rejectWithValue("아이디 또는 비밀번호가 올바르지 않습니다.");
    }

    // 성공 payload (authSlice에서 그대로 사용)
    return {
      result: 0, // 성공 0
      username: found.username,
      role: found.role,
    };
  }
);
*/