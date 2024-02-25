import { memo, useEffect } from "react";
import type { ReactNode, FC } from "react";

import { useAppDispath } from "@/store";
import {
  fetchAlbumList,
  fetchAllRankingDetail,
  fetchRecommendBanners,
  fetchRecommendList,
  fetchTopArtists
} from "@/store/module/recommend";

import { RecommendWrapper } from "./style";
import TopBanner from "./c-cpns/topBanner";
import HotRecommend from "./c-cpns/hotRecommend";
import NewAlbum from "./c-cpns/new-album";
import Ranking from "./c-cpns/r-ranking";
import UserLogin from "./c-cpns/user-login";
import ResidentArtist from "./c-cpns/resident-artist";
import HotAnchor from "./c-cpns/hot-anchor";

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
    dispath(fetchTopArtists());
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

        <div className="r-right">
          <UserLogin />
          <ResidentArtist />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
