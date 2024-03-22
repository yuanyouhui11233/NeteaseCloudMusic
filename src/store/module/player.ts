import { getCurrentPlaySong, getSongLyric } from "@/service/player";
import { parseLyric } from "@/utils/parse-lyric";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IRootState } from "..";
interface IThunkState {
  state: IRootState;
}
type IlyricSong = {
  text: string;
  time: number;
};
interface Istate {
  currentSong: any;
  lyricSong: IlyricSong[];
  lyricIndex: number;

  playList: any[]; // 维护的播放列表
  currentIndex: any; // 播放列表中当前播放歌曲的索引

  playMode: 0 | 1 | 2;
}
//  通过id请求当前播放歌曲
// 请求当前播放歌曲的两种逻辑
// 1. 播放的歌曲没有在维护的播放列表中
// 2. 播放的歌曲在维护的播放列表中
export const fetchCurrentSong = createAsyncThunk<void, number, IThunkState>(
  "player/song",
  async (id, { dispatch, getState }) => {
    const playList = getState().player.playList;
    const findIndex = playList.findIndex((item) => item.id === id);
    if (findIndex === -1) {
      // 播放列表没有这首歌
      const res = await getCurrentPlaySong(id);
      if (!res.songs.length) return;
      const updatedPlayList = [...playList];
      updatedPlayList.push(res.songs[0]);
      dispatch(changeCurrentSongsAction(res.songs[0]));
      dispatch(changePlayListAction(updatedPlayList));
      dispatch(changeCurrentIndexAction(updatedPlayList.length - 1));
    } else {
      dispatch(changeCurrentIndexAction(findIndex));
      dispatch(changeCurrentSongsAction(playList[findIndex]));
    }
  }
);
// 通过id拿到歌词
export const fetchSongLyric = createAsyncThunk(
  "player/lyric",
  (id: number, { dispatch }) => {
    getSongLyric(id).then((res) => {
      if (res.code !== 200) return;
      const lyric = res.lrc.lyric;
      const parseLrc = parseLyric(lyric);
      console.log(parseLrc);

      dispatch(changeSongLyricAction(parseLrc));
    });
  }
);
/**
 * 通过playList的上一个/下一个的索引来设置currentSong 和 currentIndex
 * 只需要根据 播放模式和 上一首/下一首 来重新赋值 newIndex
 * 最后通过 newIndex 从 playList取歌曲 存到store即可
 * 组件页只需从store取currentSong
 */
export const fetchChangeMusic = createAsyncThunk<void, boolean, IThunkState>(
  "player/changeMusic",
  (isNext, { dispatch, getState }) => {
    const player = getState().player;
    const playList = player.playList;
    const playMode = player.playMode;
    console.log(playList);
    const currentIndex = player.currentIndex;
    let newIndex = currentIndex;
    if (playMode === 0) {
      newIndex = isNext ? currentIndex + 1 : newIndex - 1;
      if (newIndex >= playList.length - 1) newIndex = 0;
      if (newIndex < 0) newIndex = playList.length - 1;
    } else if (playMode === 1) {
      const random = Math.floor(Math.random() * (playList.length - 1)); // 随机数未做相等时，重新随机
      newIndex = random;
    } else {
      console.log("单曲");
    }

    dispatch(changeCurrentIndexAction(newIndex));
    dispatch(changeCurrentSongsAction(playList[newIndex]));
    localStorage.setItem("currentIndex", newIndex.toString());
    // 请求新的歌词
    dispatch(fetchSongLyric(playList[newIndex].id));
  }
);

const initialState: Istate = {
  currentSong: null,
  lyricSong: [],
  lyricIndex: -1,
  playList: [
    {
      name: "身骑白马",
      id: 2127872173,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12213291,
          name: "张叶蕾",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 7,
      crbt: null,
      cf: "",
      al: {
        id: 186400461,
        name: "身骑白马",
        picUrl:
          "https://p1.music.126.net/njLkPcFGmXRe5G6yyKuH-A==/109951169350414864.jpg",
        tns: [],
        pic_str: "109951169350414864",
        pic: 109951169350414860
      },
      dt: 241008,
      h: {
        br: 320002,
        fid: 0,
        size: 9643407,
        vd: -49745,
        sr: 44100
      },
      m: {
        br: 192002,
        fid: 0,
        size: 5786062,
        vd: -47131,
        sr: 44100
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3857389,
        vd: -45418,
        sr: 44100
      },
      sq: {
        br: 863753,
        fid: 0,
        size: 26021474,
        vd: -49743,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 306664,
        name: "身骑白马",
        artists: [
          {
            id: 9940,
            name: "徐佳莹"
          }
        ],
        albumMeta: {
          id: 30452,
          name: "LaLa首张创作专辑"
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 7,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1708358400000,
      tns: ["而你却靠近了逼我们视线交错"]
    },
    {
      name: "喜欢你",
      id: 28949444,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 7763,
          name: "G.E.M.邓紫棋",
          tns: [],
          alias: []
        }
      ],
      alia: ["Like You"],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 64,
      crbt: null,
      cf: "",
      al: {
        id: 2956076,
        name: "喜欢你",
        picUrl:
          "https://p1.music.126.net/u_1EudmF8Swgow6vfgYe1g==/8896148580676276.jpg",
        tns: [],
        pic: 8896148580676276
      },
      dt: 239010,
      h: {
        br: 320002,
        fid: 0,
        size: 9562950,
        vd: -47857,
        sr: 44100
      },
      m: {
        br: 192002,
        fid: 0,
        size: 5737787,
        vd: -45356,
        sr: 44100
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3825206,
        vd: -43968,
        sr: 44100
      },
      sq: {
        br: 963065,
        fid: 0,
        size: 28772835,
        vd: -47351,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: "1",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 64,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415926,
      publishTime: 1408032000007
    },
    {
      name: "你把我灌醉",
      id: 26550057,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 7763,
          name: "G.E.M.邓紫棋",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 48,
      crbt: null,
      cf: "",
      al: {
        id: 2389401,
        name: "The Best of G.E.M. 2008 - 2012 (Deluxe Version)",
        picUrl:
          "https://p1.music.126.net/fqleir2BWqbmE8tDNLa5Pg==/109951163789160762.jpg",
        tns: [],
        pic_str: "109951163789160762",
        pic: 109951163789160770
      },
      dt: 285190,
      h: {
        br: 320000,
        fid: 0,
        size: 11410329,
        vd: -39556,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6846215,
        vd: -36994,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4564158,
        vd: -35304,
        sr: 44100
      },
      sq: {
        br: 891469,
        fid: 0,
        size: 31779855,
        vd: -39614,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: "01",
      no: 13,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 48,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 113068,
      rurl: null,
      mst: 9,
      cp: 1415926,
      rtype: 0,
      publishTime: 1371744000007
    },

    {
      name: "谁",
      id: 2026812798,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 14312549,
          name: "王贰浪",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 8,
      crbt: null,
      cf: "",
      al: {
        id: 161031103,
        name: "谁",
        picUrl:
          "https://p2.music.126.net/vW3MIdTCHLBV1Gj3nWQczA==/109951168444393077.jpg",
        tns: [],
        pic_str: "109951168444393077",
        pic: 109951168444393070
      },
      dt: 208502,
      h: {
        br: 320000,
        fid: 0,
        size: 8342445,
        vd: -21906,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5005485,
        vd: -19311,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3337005,
        vd: -17763,
        sr: 48000
      },
      sq: {
        br: 846794,
        fid: 0,
        size: 22069877,
        vd: -21541,
        sr: 48000
      },
      hr: {
        br: 1609519,
        fid: 0,
        size: 41948681,
        vd: -21830,
        sr: 48000
      },
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 566436427,
        name: "谁 (Live版)",
        artists: [
          {
            id: 13022016,
            name: "廖俊涛"
          }
        ],
        albumMeta: {
          id: 39263103,
          name: "这个人创作LIVE现场辑"
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 8,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1677945600000,
      tns: ["女声版"]
    }
  ],
  currentIndex: null,
  playMode: 0 // 0:顺序播放 1：随机播放 2：单曲循环
};
const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    changeCurrentSongsAction(state, { payload }) {
      state.currentSong = payload;
    },
    changeSongLyricAction(state, { payload }) {
      state.lyricSong = payload;
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload;
    },
    changeCurrentIndexAction(state, { payload }) {
      state.currentIndex = payload;
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload;
    }
  }
});
export const {
  changeCurrentSongsAction,
  changeSongLyricAction,
  changeLyricIndexAction,
  changeCurrentIndexAction,
  changePlayListAction,
  changePlayModeAction
} = playerSlice.actions;
export default playerSlice.reducer;
