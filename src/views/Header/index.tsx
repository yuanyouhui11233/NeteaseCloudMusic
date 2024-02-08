import { memo } from "react";
import { Link } from "react-router-dom";

const Header = memo(() => {
  return (
    <div>
      <Link to={"/discover"}>发现</Link>
      <Link to={"/my"}>我的音乐</Link>
      <Link to={"/friend"}>关注</Link>
    </div>
  );
});

export default Header;
