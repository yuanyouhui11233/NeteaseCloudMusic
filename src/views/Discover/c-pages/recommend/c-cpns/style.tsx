import styled from "styled-components";

export const CarouselWrapper = styled.div`
  .carousel-wrap {
    height: 285px;
    margin: 0 auto;
    position: relative;
  }
`;
export const CarouselContent = styled.div`
  .wrap {
    position: absolute;
    left: 270px;
    width: 980px;
    display: flex;
    justify-content: space-between;
    .wrap-banner {
      width: 730px;
      .image {
        height: 285px;
        width: 100%;
      }
    }
    .wrap-download {
      width: 250px;
      height: 285px;
      p {
        color: rgb(141, 141, 141);
        text-align: center;
        margin: 10px auto 0;
      }
      .btn {
        width: 215px;
        height: 56px;
        background-position: 0 -289px;
        text-indent: -9999px;
        margin: 185px 0 0 19px;
        opacity: 0;
      }
      .btn:hover {
        opacity: 1;
      }
    }
  }
`;
export const CarouselButton = styled.div`
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;
    cursor: pointer;
    background-color: transparent;
    background: url(${require("@/assets/img/banner_sprite.png")}) no-repeat 0 0;
    text-indent: -9999px;
  }
  .left {
    left: 208px;
    background-position: 0 -360px;
  }
  .left:hover {
    background-position: 0 -429px;
  }
  .right {
    right: 208px;
    background-position: 0 -508px;
  }
  .right:hover {
    background-position: 0 -577px;
  }
`;
