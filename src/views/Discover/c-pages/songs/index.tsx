import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
  children?: ReactNode;
}

const Songs: FC<Iprops> = () => {
  return <div>Songs</div>;
};

export default memo(Songs);
