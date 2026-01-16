
export const pendingHandler = (state) => {
  state.loading = true;
  state.error = null;
};

export const fulfilledHandler = (state) => {
  state.loading = false;
  state.error = null;
};

export const rejectedHandler = (state, action) => {
  state.loading = false;
  state.error = action.payload || action.error?.message || "error";
};
