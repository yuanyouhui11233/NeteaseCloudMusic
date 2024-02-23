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
    url: `personalized?limit=${limit}`
  });
}
