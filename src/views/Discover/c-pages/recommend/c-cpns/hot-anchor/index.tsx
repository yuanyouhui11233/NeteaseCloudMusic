import { memo } from "react";
import type { ReactNode, FC } from "react";
import { HotAnthorWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { hotRadios } from "@/assets/data/local-data";
import { formatImgSize } from "@/utils/format";
interface Iprops {
  children?: ReactNode;
}

const HotAnthor: FC<Iprops> = () => {
  return (
    <HotAnthorWrapper>
      <div className="heaer">
        <AreaHeaderV2 title="热门主播" />
        <div className="anthor-list">
          {hotRadios.map((item) => {
            return (
              <div key={item.id} className="item">
                <div className="cover">
                  <img src={formatImgSize(item.picUrl, 40, 40)} />
                </div>

                <div className="info textNoWrap">
                  <div className="name">
                    <a href="#">{item.name}</a>
                  </div>
                  <div className="desc textNoWrap" title={item.desc}>
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </HotAnthorWrapper>
  );
};

export default memo(HotAnthor);
