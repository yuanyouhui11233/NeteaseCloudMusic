import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
  children?: ReactNode;
}

const Ranking: FC<Iprops> = () => {
  return <div>Ranking</div>;
};

export default memo(Ranking);
