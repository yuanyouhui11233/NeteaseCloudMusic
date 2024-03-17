interface Ilyric {
  time: number;
  text: string;
}

const timeRegExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/;
/**
 * 解析歌词字符串 [00:03:100,歌词]
 * "{\"t\":0,\"c\":[{\"tx\":\"作词: \"},{\"tx\":\"葛佳慧\"}]}"
 * 由于作词，作曲是json字符串，需要解析json字符串
 * @param lyricString 歌词字符串
 * @returns [{time,text}]
 */
export function parseLyric(lyricString: string) {
  const lyric: Ilyric[] = [];
  const lyricArr = lyricString.split("\n");
  lyricArr.map((item) => {
    try {
      const parse = JSON.parse(item);
      const txArray = parse.c.map((item: { tx: string }) => item.tx);
      const strTX = txArray.join("");
      lyric.push({
        time: parse.t,
        text: strTX
      });
    } catch (error) {
      const match = item.match(timeRegExp);
      if (match) {
        const minute = Number(match[1]) * 60 * 1000;
        const second = Number(match[2]) * 1000;
        const msec =
          match[3].length === 2 ? Number(match[3]) * 10 : Number(match[3]);
        const msecTotal = minute + second + msec;

        const text = match.input?.split("]")[1] ?? "";

        lyric.push({
          time: msecTotal,
          text
        });
      }
    }
  });

  return lyric;
}
