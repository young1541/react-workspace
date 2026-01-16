// redux/authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pendingHandler, fulfilledHandler, rejectedHandler } from "./commonLoadingHandlers";

const STORAGE_KEY = "auth";

const defaultState = {
  isLoggedIn: false,
  username: null,
  loading: false,
  error: null,
  result: 0,
};

// sessionStorage 값 있으면 그걸로 초기화
const loadInitialState = () => {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState;

    const parsed = JSON.parse(saved);
    return {
      ...defaultState,
      ...parsed,
      loading: false,
      error: null,
    };
  } catch (e) {
    return defaultState;
  }
};

// ✅ 로그인 비동기 thunk
export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async ({ username, password }, thunkAPI) => {
    try {
      // 여기 “정답 조건”은 과제마다 다를 수 있는데,
      // 보통은 username/password 일치 시 성공 처리함.
      // 예시: admin / 1234 만 성공
      if (username === "admin" && password === "1234") {
        return { username, result: 1 };
      }

      // 실패는 rejectWithValue로 보내야 rejectedHandler에서 payload로 잡힘
      return thunkAPI.rejectWithValue("아이디/비밀번호가 올바르지 않습니다.");
    } catch (e) {
      return thunkAPI.rejectWithValue("로그인 처리 중 오류");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: loadInitialState(),
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem(STORAGE_KEY);

      // state 초기화
      state.isLoggedIn = false;
      state.username = null;
      state.loading = false;
      state.error = null;
      state.result = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, pendingHandler)
      .addCase(loginAsync.fulfilled, (state, action) => {
        fulfilledHandler(state);

        state.isLoggedIn = true;
        state.username = action.payload.username;
        state.result = action.payload.result ?? 1;

        // ✅ 성공 시 sessionStorage 저장
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            isLoggedIn: state.isLoggedIn,
            username: state.username,
            result: state.result,
          })
        );
      })
      .addCase(loginAsync.rejected, rejectedHandler);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
