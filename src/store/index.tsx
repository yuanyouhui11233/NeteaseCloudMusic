import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "./module/user";
import recommendSlice from "./module/recommend";
import playerSlice from "./module/player";
const store = configureStore({
  reducer: {
    user: userSlice,
    recommend: recommendSlice,
    player: playerSlice
  }
});
export type IRootState = ReturnType<typeof store.getState>;
type AppDispath = typeof store.dispatch;
// useSelector useDispath Hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispath: () => AppDispath = useDispatch;
export default store;
