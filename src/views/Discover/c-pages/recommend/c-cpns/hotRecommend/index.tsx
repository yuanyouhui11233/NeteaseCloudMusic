import { memo } from "react";
import type { ReactNode, FC } from "react";
import { HotRecommendWrapper } from "./style";

interface Iprops {
  children?: ReactNode;
}

const HotRecommend: FC<Iprops> = () => {
  return (
    <HotRecommendWrapper>
      <div>HotRecommend</div>;
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);
