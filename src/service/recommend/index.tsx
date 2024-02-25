import axRequest from "..";
// 轮播图
export function getBanners() {
  return axRequest.get({
    url: "/banner"
  });
}
// 推荐歌单
export function getRecommendList(limit = 30) {
  return axRequest.get({
    url: `/personalized?limit=${limit}`
  });
}

// 新碟

export function getNeWAlbumList() {
  return axRequest.get({
    url: "/album/newest"
  });
}

// 获取歌单详情
export function getPlaylistDetail(id: number) {
  return axRequest.get({
    url: "/playlist/detail",
    params: {
      id
    }
  });
}
