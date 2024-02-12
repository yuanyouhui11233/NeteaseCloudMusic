import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    account: "lc123",
    name: "liuChang"
  },
  reducers: {
    ChangeAccountAction(state, { payload }) {
      state.name = payload;
    }
  }
});
export const { ChangeAccountAction } = userSlice.actions;
export default userSlice.reducer;
