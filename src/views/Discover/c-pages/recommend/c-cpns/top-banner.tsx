import { memo, useRef, useState } from "react";
import type { ReactNode, FC, ElementRef } from "react";
import { Carousel } from "antd";

import { useAppSelector } from "@/store";
import { CarouselWrapper, CarouselContent, CarouselButton } from "./style";

interface Iprops {
  children?: ReactNode;
}

const TopBanner: FC<Iprops> = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const banner = useAppSelector((state) => {
    return state.recommend.banners;
  });
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);
  // 点击按钮控制轮播图切换 (拿到轮播图组件实例，调用其方法)
  function switchPrev() {
    carouselRef.current?.prev();
  }
  function switchNext() {
    carouselRef.current?.next();
  }
  function handleAfterChange(current: number) {
    console.log(current);
    setBannerIndex(current);
    setImgUrl(banner[current]?.imageUrl + "?imageView&blur=40x20");
    console.log(imgUrl);
  }

  return (
    <CarouselWrapper>
      <div
        className="carousel-wrap"
        style={{
          background: `url(${imgUrl}) center center / 6000px`
        }}
      >
        <CarouselContent>
          <div className="wrap">
            <div className="wrap-banner">
              <Carousel
                afterChange={(current) => handleAfterChange(current)}
                autoplay
                ref={carouselRef}
                effect="fade"
              >
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
              <a href="/download" className="btn download-img ">
                下载客户端
              </a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
          </div>
        </CarouselContent>
        <CarouselButton>
          {/* 相对于轮播图来绝对定位好一点。这里是相对于最外层 carousel-wrap */}
          <button className="btn left" onClick={switchPrev}>
            prev
          </button>
          <button className="btn right" onClick={switchNext}>
            next
          </button>
        </CarouselButton>
      </div>
    </CarouselWrapper>
  );
};

export default memo(TopBanner);
