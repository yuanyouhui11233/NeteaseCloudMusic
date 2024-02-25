import { memo } from "react";
import type { ReactNode, FC } from "react";
import { ResidentArtistWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { useAppSelector } from "@/store";
import { formatImgSize } from "@/utils/format";

interface Iprops {
  children?: ReactNode;
}
/**
 * 没有入驻歌手的接口，所以用的热门歌手列表
 */
const ResidentArtist: FC<Iprops> = () => {
  const artistsList = useAppSelector((state) => {
    return state.recommend.topArtistsList;
  });
  return (
    <ResidentArtistWrapper>
      <div className="header">
        <AreaHeaderV2 title={"入驻歌手"} path="/" pathText="查看全部>" />
      </div>
      <div className="content">
        {artistsList.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="i-img">
                <img src={formatImgSize(item.picUrl, 62, 62)} alt="" />
              </div>
              <div className="i-info">
                <h3>{item.name}</h3>
                <div className="desc textNoWrap">{item.alias.join(" ")}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer-btn">
        <a href="" className="btn sprite_button">
          <i className="sprite_button">申请成为网易音乐人</i>
        </a>
      </div>
    </ResidentArtistWrapper>
  );
};

export default memo(ResidentArtist);
