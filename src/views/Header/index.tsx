import { memo } from "react";
import { Link } from "react-router-dom";

const Header = memo(() => {
  return (
    <div>
      <Link to={"/discover"}>发现音乐</Link>
      <Link to={"/mine"}>我的音乐</Link>
      <Link to={"/friend"}>关注</Link>
      <Link to={"/download"}>下载客户端</Link>
      <Link to={"/store"}>商城</Link>
    </div>
  );
});

export default Header;
