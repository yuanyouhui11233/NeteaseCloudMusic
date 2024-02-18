import { Suspense, memo } from "react";
import type { ReactNode, FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { discoverMenu } from "@/assets/data/local-data";
import { NavWrapper } from "./style";
interface Iprops {
  children?: ReactNode;
}

const Discover: FC<Iprops> = () => {
  return (
    <NavWrapper>
      <div className="discover">
        <div className="subnav">
          <div className="wrap">
            <div className="menu">
              {discoverMenu.map((item) => {
                return (
                  <NavLink className="m-item" key={item.title} to={item.path}>
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="dis-content">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </NavWrapper>
  );
};

export default memo(Discover);
