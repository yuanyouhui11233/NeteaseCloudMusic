import styled from "styled-components";
export const RecommendWrapper = styled.div`
  .recommend-page {
    .r-carousel {
    }
  }
  .r-content {
    display: flex;
    width: 980px;
    margin: 0 auto;
    min-height: 700px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y 100% 100%;
    .r-left {
      width: 729px;
      padding: 20px 20px 40px;
      box-sizing: border-box;
    }
    .r-right {
      width: 250px;
    }
  }
`;
