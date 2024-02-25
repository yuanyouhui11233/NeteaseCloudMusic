import { memo } from "react";
import type { ReactNode, FC } from "react";
import { AreaHeaderWrapperV2 } from "./style";
import { Link } from "react-router-dom";
/**
 * recommend 推荐页右侧内容的 header
 */
interface Iprops {
  children?: ReactNode;
  title: string;
  path?: string;
  pathText?: string;
}

const AreaHeaderV2: FC<Iprops> = (props) => {
  const { title, path = "/discover/artist", pathText } = props;
  return (
    <AreaHeaderWrapperV2>
      <div className="left">
        <p>{title}</p>
      </div>
      <div className="right">
        <Link to={path}>{pathText}</Link>
      </div>
    </AreaHeaderWrapperV2>
  );
};

export default memo(AreaHeaderV2);
