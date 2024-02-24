import {
  getBanners,
  getNeWAlbumList,
  getRecommendList
} from "@/service/recommend";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface IRecommendState {
  banners: any[];
  recommendList: any[];
  newAlbumList: any[];
}
// 当一个页面需要发多个网络请求时，没有额外参数时，可以在一个createAsyncThunk中同时发多个。 这样会减少代码量，及只需要调用一次
export const fetchRecommendBanners = createAsyncThunk(
  "recommend/banner",
  async (_, { dispatch }) => {
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
// 新碟上架
export const fetchAlbumList = createAsyncThunk(
  "album/list",
  async (_, { dispatch }) => {
    const res = await getNeWAlbumList();
    dispatch(changeNewAlubmAction(res.albums));
  }
);
const initialState: IRecommendState = {
  banners: [],
  recommendList: [],
  newAlbumList: []
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
    },
    changeNewAlubmAction(state, { payload }) {
      state.newAlbumList = payload;
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
export const {
  changeBannersAction,
  changeRmdListAction,
  changeNewAlubmAction
} = recommendSlice.actions;
export default recommendSlice.reducer;
