import axRequest from "..";

export function getBanners() {
  return axRequest.get({
    url: "/banner"
  });
}
