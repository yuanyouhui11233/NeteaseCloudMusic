import { useAppSelector, useAppDispath } from "@/store";
import { ChangeAccountAction } from "@/store/module/user";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

interface Iprops {
  children?: ReactNode;
}
const Mine: FC<Iprops> = () => {
  const name = useAppSelector((state) => state.user.name, shallowEqual);
  console.log(name);
  const dispath = useAppDispath();
  function handleClick() {
    dispath(ChangeAccountAction("hahhahahhah" + Math.random()));
  }
  return (
    <div>
      Mine
      <div>当前user： {name}</div>
      <button onClick={(e) => handleClick()}>change</button>
    </div>
  );
};
export default memo(Mine);
