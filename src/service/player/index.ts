import axRequest from "..";

export function getCurrentPlaySong(ids: number | number[]) {
  return axRequest.get({
    url: `/song/detail`,
    params: {
      ids
    }
  });
}
