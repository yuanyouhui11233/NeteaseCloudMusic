import { memo, useEffect } from "react";
import type { ReactNode, FC } from "react";

import { useAppDispath } from "@/store";
import {
  fetchAlbumList,
  fetchRecommendBanners,
  fetchRecommendList
} from "@/store/module/recommend";

import TopBanner from "./c-cpns/topBanner";
import HotRecommend from "./c-cpns/hotRecommend";
import { RecommendWrapper } from "./style";
import NewAlbum from "./c-cpns/new-album";

interface Iprops {
  children?: ReactNode;
}

const Recommend: FC<Iprops> = () => {
  const dispath = useAppDispath();
  useEffect(() => {
    dispath(fetchRecommendBanners());
    dispath(fetchRecommendList(8));
    dispath(fetchAlbumList());
  });
  return (
    <RecommendWrapper className="recommend-page">
      <div className="r-carousel">
        <TopBanner />
      </div>
      <div className="r-content">
        <div className="r-left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="r-right">right</div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
