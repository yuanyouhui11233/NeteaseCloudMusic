import { createSlice } from "@reduxjs/toolkit";
interface Istate {
  currentSong: any;
}
const initialState: Istate = {
  currentSong: {
    songs: {
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
      v: 6,
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
      dt: 266885,
      h: {
        br: 320000,
        fid: 0,
        size: 10677856,
        vd: -51425,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6406731,
        vd: -48812,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4271168,
        vd: -47093,
        sr: 44100
      },
      sq: {
        br: 877321,
        fid: 0,
        size: 29268072,
        vd: -51175,
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
      version: 6,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      cp: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      mv: 0,
      publishTime: 1708358400000,
      tns: ["而你却靠近了逼我们视线交错"]
    }
  }
};
const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {}
});
// export const {} = playerSlice.actions;
export default playerSlice.reducer;
