export const createLoadingReducers = (builder, asyncThunk) => {
    builder
      .addCase(asyncThunk.pending, (state) => {
        console.log("로딩중")
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunk.rejected, (state, action) => {
        console.log("error")
        state.loading = false;
        state.error = action.error.message;
      });
  };
  