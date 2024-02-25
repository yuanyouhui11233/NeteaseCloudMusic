export function formatSongPlayCount(plauCount: number) {
  if (plauCount > 100000) {
    return Math.floor(plauCount / 10000) + "万";
  } else {
    return plauCount;
  }
}
// 定义img的尺寸
export function formatImgSize(imgUrl: string, width: number, height: number) {
  return imgUrl + `?param=${width}y${height}`;
}
