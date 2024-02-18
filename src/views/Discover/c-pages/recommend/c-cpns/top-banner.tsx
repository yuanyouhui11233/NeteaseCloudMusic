import { memo } from "react";
import type { ReactNode, FC } from "react";
import { Carousel } from "antd";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { useAppSelector } from "@/store";
import { CarouselWrapper, CarouselContent, CarouselButton } from "./style";

interface Iprops {
  children?: ReactNode;
}

const TopBanner: FC<Iprops> = () => {
  const banner = useAppSelector((state) => {
    return state.recommend.banners;
  });

  return (
    <CarouselWrapper>
      <div className="carousel-wrap">
        <CarouselContent>
          <div className="wrap">
            <div className="wrap-banner">
              <Carousel autoplay>
                {banner.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="image"
                        src={item.imageUrl}
                        alt={item.typeTitle}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="wrap-download download-img">
              <a href="/download" className="btn download-img">
                下载客户端
              </a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
          </div>
        </CarouselContent>
        <CarouselButton></CarouselButton>
      </div>
    </CarouselWrapper>
  );
};

export default memo(TopBanner);
