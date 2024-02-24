import { memo } from "react";
import type { ReactNode, FC } from "react";
import { NewAlbumItemWrapper } from "./style";
import { formatImgSize } from "@/utils/format";

interface Iprops {
  children?: ReactNode;
  itemData: any;
}

const NewAlbumItem: FC<Iprops> = (props) => {
  const { itemData } = props;

  return (
    <NewAlbumItemWrapper>
      <div className="album-item sprite_02">
        <div className="top cover">
          <img src={formatImgSize(itemData.picUrl, 100, 100)} alt="" />
          <a href="" className="msk sprite_cover" title={itemData.name} />
          <a href="#" title="播放" className="icon-play sprite_icon" />
        </div>
        <div className="bottom">
          <p className="text-area">
            <a href="#" className="name textNoWrap" title={itemData.name}>
              {itemData.name}
            </a>
          </p>
          <p className="artist_area">
            <a
              href="#"
              className="artist textNoWrap"
              title={itemData.artist.name}
            >
              {itemData.artist.name}
            </a>
          </p>
        </div>
      </div>
    </NewAlbumItemWrapper>
  );
};

export default memo(NewAlbumItem);
