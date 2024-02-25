import { memo, useEffect } from "react";
import type { ReactNode, FC } from "react";

import { useAppDispath } from "@/store";
import {
  fetchAlbumList,
  fetchAllRankingDetail,
  fetchRecommendBanners,
  fetchRecommendList
} from "@/store/module/recommend";

import { RecommendWrapper } from "./style";
import TopBanner from "./c-cpns/topBanner";
import HotRecommend from "./c-cpns/hotRecommend";
import NewAlbum from "./c-cpns/new-album";
import Ranking from "./c-cpns/r-ranking";

interface Iprops {
  children?: ReactNode;
}

const Recommend: FC<Iprops> = () => {
  const dispath = useAppDispath();
  useEffect(() => {
    dispath(fetchRecommendBanners());
    dispath(fetchRecommendList(8));
    dispath(fetchAlbumList());
    dispath(fetchAllRankingDetail());
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
          <Ranking />
        </div>
        <div className="r-right">right</div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
