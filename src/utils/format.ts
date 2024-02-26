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

/**
 * 传入毫数 返回 MM:SS 格式的时间
 * @param millisecond 毫秒
 * @returns MM:SS格式的时间
 */
export function formatTime(millisecond: number) {
  millisecond = millisecond / 1000;
  const minutes = Math.floor(millisecond / 60);
  const remainingSeconds = Math.floor(millisecond % 60);

  // 使用 padStart 方法确保分钟和秒数始终是两位数
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
