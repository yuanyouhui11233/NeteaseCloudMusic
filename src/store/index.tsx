import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./module/user";
import recommendSlice from "./module/recommend";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    user: userSlice,
    recommend: recommendSlice
  }
});
type RootState = ReturnType<typeof store.getState>;
type AppDispath = typeof store.dispatch;
// useSelector useDispath Hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispath: () => AppDispath = useDispatch;
export default store;
