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
        margin: 10px auto;
      }
      .btn {
        width: 215px;
        height: 56px;
        background-position: 0 -289px;
        text-indent: -9999px;
        margin: 185px 0 0 20px;
      }
    }
  }
`;
// export const CarouselRight = styled.div``;
export const CarouselButton = styled.div``;
