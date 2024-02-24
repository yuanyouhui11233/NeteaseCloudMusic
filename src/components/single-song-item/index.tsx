import { memo } from "react";
import type { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

import { SingleSongWrapper } from "./style";
import { formatImgSize, formatSongPlayCount } from "@/utils/format";

interface Iprops {
  children?: ReactNode;

  title?: string;
  picUrl?: string;
  playCount?: number;
  imgSize?: {
    width: number;
    height: number;
  };
}

const SingleSongItem: FC<Iprops> = (props) => {
  const {
    title = "默认标题",
    picUrl = "",
    playCount = 0,
    imgSize = { width: 140, height: 140 }
  } = props;
  return (
    <SingleSongWrapper>
      <div className="s-cover s-cover-1">
        <img
          src={formatImgSize(picUrl, imgSize.width, imgSize.height)}
          alt=""
          className="cover-img"
        />
        <Link to="" className="msk sprite_cover" title={title}></Link>
        <div className="bottom sprite_cover">
          <div className="layout">
            <div className="l-left">
              <span className="icon-headset sprite_icon"></span>
              <span className="nb">{formatSongPlayCount(playCount)}</span>
            </div>
            <a href="" title="播放" className="icon-play sprite_icon"></a>
          </div>
        </div>
      </div>
      <div className="desc">
        <Link to="" className="desc-text">
          {title}
        </Link>
      </div>
    </SingleSongWrapper>
  );
};

export default memo(SingleSongItem);
