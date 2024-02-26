import { memo } from "react";
import type { ReactNode, FC } from "react";
import { PlayerWrapper } from "./style";

interface Iprops {
  children?: ReactNode;
}

const Player: FC<Iprops> = () => {
  return <PlayerWrapper>Player</PlayerWrapper>;
};

export default memo(Player);
