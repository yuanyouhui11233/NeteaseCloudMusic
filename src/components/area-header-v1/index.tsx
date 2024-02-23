import { memo } from "react";
import type { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

import { AreaHeaderWrapper } from "./style";
interface Iprops {
  children?: ReactNode;
  title?: string;
  pathLink?: string;
  keyword?: string[];
  moreText?: string;
}

const AreaHeader: FC<Iprops> = (props) => {
  const {
    title = "默认标题",
    pathLink = "/",
    keyword = [],
    moreText = "更多"
  } = props;
  return (
    <AreaHeaderWrapper className="sprite_02">
      <div className="h-left">
        <h3 className="title">
          <Link to={pathLink}>{title}</Link>
        </h3>
        <div className="keyword">
          {keyword.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="line">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-right">
        <Link to={pathLink} className="more">
          {moreText}
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </AreaHeaderWrapper>
  );
};

export default memo(AreaHeader);
