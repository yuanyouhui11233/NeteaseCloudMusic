import { memo } from "react";
import type { ReactNode, FC } from "react";
import { HotRecommendWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector } from "@/store";
import SingleSongItem from "@/components/single-song-item";

interface Iprops {
  children?: ReactNode;
}

const HotRecommend: FC<Iprops> = () => {
  const recommendList = useAppSelector(
    (state) => state.recommend.recommendList
  );
  console.log(recommendList);

  return (
    <HotRecommendWrapper>
      <div className="left">
        <div className="left-content">
          <AreaHeaderV1
            title="热门推荐"
            pathLink="/discover/songs"
            keyword={["华语", "流行", "摇滚", "民谣", "电子"]}
          />

          <div className="left-songs">
            <SingleSongItem />
            <SingleSongItem />
            <SingleSongItem />
            <SingleSongItem />
            <SingleSongItem />
            <SingleSongItem />
            <SingleSongItem />
            <SingleSongItem />
          </div>
        </div>
      </div>
      <div className="right">right</div>
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);
