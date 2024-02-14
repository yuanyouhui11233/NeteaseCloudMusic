import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  account: "lc123",
  name: "liuchang",
  direction: "left"
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ChangeAccountAction(state, { payload }) {
      state.name = payload;
    }
  }
});
export const { ChangeAccountAction } = userSlice.actions;
export default userSlice.reducer;
