import axRequest from "..";

export function getCurrentPlaySong(ids: number | number[]) {
  return axRequest.get({
    url: `/song/detail`,
    params: {
      ids
    }
  });
}

// 获取歌词
export function getSongLyric(id: number | string) {
  return axRequest.get({
    url: "/lyric/new",
    params: {
      id
    }
  });
}
