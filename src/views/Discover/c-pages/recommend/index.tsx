import { memo, useEffect } from "react";
import type { ReactNode, FC } from "react";

import { useAppDispath } from "@/store";
import { fetchRecommendBanners } from "@/store/module/recommend";

import TopBanner from "./c-cpns/topBanner";
import HotRecommend from "./c-cpns/hotRecommend";

interface Iprops {
  children?: ReactNode;
}

const Recommend: FC<Iprops> = () => {
  const dispath = useAppDispath();
  useEffect(() => {
    dispath(fetchRecommendBanners());
  });
  return (
    <div className="recommend-page">
      <div className="r-carousel">
        <TopBanner />
      </div>
      <div className="r-content">
        <HotRecommend />
      </div>
    </div>
  );
};

export default memo(Recommend);
