import { useAppSelector, useAppDispath } from "@/store";
import { ChangeAccountAction } from "@/store/module/user";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";
import { Button } from "antd";
interface Iprops {
  children?: ReactNode;
}
const Mine: FC<Iprops> = () => {
  const name = useAppSelector((state) => state.user.name, shallowEqual);
  const dispath = useAppDispath();
  function handleClick() {
    dispath(ChangeAccountAction("hahhahahhah" + Math.random()));
  }
  return (
    <div>
      Mine
      <div>当前user： {name}</div>
      <Button type="primary" onClick={(e) => handleClick()}>
        change
      </Button>
    </div>
  );
};
export default memo(Mine);
