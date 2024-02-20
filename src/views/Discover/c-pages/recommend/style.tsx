import styled from "styled-components";
export const RecommendWrapper = styled.div`
  .r-content {
    display: flex;
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y 100% 100%;
  }
  .left {
    width: 730px;
    border-right: 1px solid #d3d3d3;
    .left-content {
      padding: 20px 20px 40px;
    }
  }
  .right {
    width: 250px;
  }
`;
