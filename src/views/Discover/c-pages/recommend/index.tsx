import { memo, useEffect } from "react";
import type { ReactNode, FC } from "react";
import TopBanner from "./c-cpns/topBanner";
import { useAppDispath } from "@/store";
import { fetchRecommendBanners } from "@/store/module/recommend";
import { RecommendWrapper } from "./style";
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
      <RecommendWrapper>
        <div className="r-content">
          <div className="left">
            <div className="left-content">
              <HotRecommend />
            </div>
          </div>
          <div className="right">right</div>
        </div>
      </RecommendWrapper>
    </div>
  );
};

export default memo(Recommend);
