import { memo } from "react";
import type { ReactNode, FC } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import headerTitle from "@/assets/data/headerTitle.json";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
interface Iprops {
  children?: ReactNode;
}

const AppHeader: FC<Iprops> = () => {
  // 向选中的item添加一个选中的样式 有两种方式
  // 1. 通过定义索引变量，点击哪个item拿到索引，并添加类名。缺点 当不是在默认索引时刷新浏览器会导致页面和添加选中样式的不匹配。刷新，变量会变成初始值
  // 2 NavLink路径与链接路径匹配时可以自动添加active类名。编写active的css样式即可。
  function handleHeaderTitle(item: any) {
    if (item.type === "link") {
      return (
        <NavLink to={item.path}>
          {item.title}
          <div className="icon sprite_01"></div>
        </NavLink>
      );
    } else {
      return (
        <a href={item.path} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      );
    }
  }
  return (
    <HeaderWrapper>
      <div className="h-content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitle.map((item: any, index) => {
              return (
                <div className="item" key={index}>
                  {handleHeaderTitle(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          {/* <div className="right"> */}
          <div className="search">
            <Input
              prefix={<SearchOutlined />}
              className="serach-input"
              placeholder="音乐/电台/视频/用户"
            />
          </div>
          <div
            className="bilog"
            onClick={(e) =>
              window.open(
                "https://music.163.com/#/login?targetUrl=%2Fcreatorcenter",
                "_blank"
              )
            }
          >
            <span>创作者中心</span>
          </div>
          <div className="login">
            <a href="#" className="login-link">
              登录
            </a>
          </div>
          {/* </div> */}
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};
export default memo(AppHeader);
