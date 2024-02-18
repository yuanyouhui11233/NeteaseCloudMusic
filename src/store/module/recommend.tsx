import { getBanners } from "@/service/recommend";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface IRecommendState {
  banners: any[];
}
export const fetchRecommendBanners = createAsyncThunk(
  "recommend/banner",
  async (arg, { dispatch }) => {
    const res = await getBanners();
    dispatch(changeBannersAction(res.banners));
    console.log(res);
  }
);
const initialState: IRecommendState = {
  banners: []
};
const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchRecommendBanners.fulfilled, (state, action) => {
  //     const { payload } = action;
  //     console.log(state.banners, payload);
  //     state.banners = payload.banners;
  //   });
  // }
});
export const { changeBannersAction } = recommendSlice.actions;
export default recommendSlice.reducer;
