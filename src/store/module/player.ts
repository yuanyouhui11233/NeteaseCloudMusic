import { getCurrentPlaySong } from "@/service/player";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCurrentSong = createAsyncThunk(
  "player/song",
  async (id: number | number[], { dispatch }) => {
    const res = await getCurrentPlaySong(id);
    console.log(res);
    dispatch(changeSongsAction(res.songs[0]));
  }
);
interface Istate {
  currentSong: any;
}
const initialState: Istate = {
  currentSong: null
};
const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    changeSongsAction(state, { payload }) {
      state.currentSong = payload;
    }
  }
});
export const { changeSongsAction } = playerSlice.actions;
export default playerSlice.reducer;
