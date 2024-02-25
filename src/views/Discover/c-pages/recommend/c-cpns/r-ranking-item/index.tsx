import { memo } from "react";
import type { ReactNode, FC } from "react";
import { RankingItemWrapper } from "./style";
import { formatImgSize } from "@/utils/format";
import { Link } from "react-router-dom";

interface Iprops {
  children?: ReactNode;
  itemData: any;
}

const RankingItem: FC<Iprops> = (props) => {
  const { itemData } = props;
  const rankList: any[] = itemData?.tracks.slice(0, 10);
  console.log(rankList);

  // 跳转歌曲详情
  function getSongDetail(name: string) {
    console.log(name);
  }
  return (
    <RankingItemWrapper className="wrap">
      <div className="top">
        <div className="cover">
          <img
            src={formatImgSize(itemData.coverImgUrl, 100, 100)}
            alt=""
            className="r-img"
          />
          <a href="" className="msk sprite_cover"></a>
        </div>
        <div className="title">
          <h3>
            <Link
              className="list-tit"
              to="/discover/ranking"
              title={itemData.name}
            >
              {itemData.name}
            </Link>
          </h3>
          <div className="btn">
            <button className="play-icon sprite_02" title="播放">
              播放
            </button>
            <button className="collect-icon sprite_02" title="收藏">
              收藏
            </button>
          </div>
        </div>
      </div>
      <div className="list">
        {rankList.map((song, index) => {
          return (
            <div className="single" key={song.id}>
              <span className="song-rank">{index + 1}</span>
              <span
                className="song-name textNoWrap"
                onClick={() => getSongDetail(song.name)}
                title={song.name}
              >
                {song.name}
              </span>

              <div className="operator">
                <button className="play-icon sprite_02" title="播放">
                  播放
                </button>
                <button
                  className="add-icon sprite_icon2"
                  title="添加到播放列表"
                >
                  添加到播放列表
                </button>
                <button className="collect-icon sprite_02" title="收藏">
                  收藏
                </button>
              </div>
            </div>
          );
        })}
        <div className="footer">
          <Link to="/discover/ranking" className="more">
            查看全部{">"}
          </Link>
        </div>
      </div>
    </RankingItemWrapper>
  );
};

export default memo(RankingItem);
