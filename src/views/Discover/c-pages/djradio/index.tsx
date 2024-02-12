import { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
  children?: ReactNode;
}

const Djradio: FC<Iprops> = () => {
  return <div>Djradio</div>;
};

export default memo(Djradio);
