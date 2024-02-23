import { getBanners, getRecommendList } from "@/service/recommend";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface IRecommendState {
  banners: any[];
  recommendList: any[];
}
export const fetchRecommendBanners = createAsyncThunk(
  "recommend/banner",
  async (arg, { dispatch }) => {
    const res = await getBanners();
    dispatch(changeBannersAction(res.banners));
    // console.log(res);
  }
);
// 歌单推荐
export const fetchRecommendList = createAsyncThunk(
  "recommend/list",
  async (limit: number, { dispatch }) => {
    const res = await getRecommendList(limit);
    // console.log(res);

    dispatch(changeRmdListAction(res.result));
  }
);
const initialState: IRecommendState = {
  banners: [],
  recommendList: []
};
const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeRmdListAction(state, { payload }) {
      state.recommendList = payload;
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
export const { changeBannersAction, changeRmdListAction } =
  recommendSlice.actions;
export default recommendSlice.reducer;
