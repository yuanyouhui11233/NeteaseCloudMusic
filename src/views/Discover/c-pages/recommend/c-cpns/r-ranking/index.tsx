import { memo } from "react";
import type { ReactNode, FC } from "react";
import { RankingWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector } from "@/store";
import RRankingItem from "../r-ranking-item";

interface Iprops {
  children?: ReactNode;
}

const Ranking: FC<Iprops> = () => {
  const playLists = useAppSelector((state) => {
    return state.recommend.rankingLists;
  });

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" pathLink="/discover/ranking" />
      <div className="ranking-content">
        {playLists.map((item) => {
          return <RRankingItem itemData={item} key={item?.id} />;
        })}
      </div>
    </RankingWrapper>
  );
};

export default memo(Ranking);
