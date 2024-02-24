import { memo, useRef } from "react";
import type { ReactNode, FC, ElementRef } from "react";
import { Carousel } from "antd";
import { NewAlbumWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector } from "@/store";
import NewAlbumItem from "@/components/new-album-item";

interface Iprops {
  children?: ReactNode;
}
/**
 * 新碟上架展示数据的处理方案
 * 1：一个轮播图项要展示 5条数据
 * 共两个  0展示 0~4 1展示 5~9
 * 如何拿到截取后的正确数组呢？
 * array.slice(start, end) 拿到截取后的数据
 * 页面0： start: 0 * 5 end: (0 +1) * 5  -> 0,5
 * 页面1： start: 1 * 5 end: (1 + 1) * 5 -> 5,10
 */
const NewAlbum: FC<Iprops> = () => {
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);
  const albumsList = useAppSelector((state) => {
    return state.recommend.newAlbumList;
  });
  /** 轮播图上一个/下一个按钮事件 */
  function handleChange(type: "prev" | "next") {
    if (type === "prev") {
      carouselRef.current?.prev();
    } else {
      carouselRef.current?.next();
      console.log(albumsList);
    }
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" pathLink="/discover/album" />
      <div className="disk-content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => handleChange("prev")}
        />
        <div className="inner-content">
          <Carousel ref={carouselRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {albumsList.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => handleChange("next")}
        />
      </div>
    </NewAlbumWrapper>
  );
};

export default memo(NewAlbum);
