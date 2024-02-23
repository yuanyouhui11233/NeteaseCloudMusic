import styled from "styled-components";
export const HotRecommendWrapper = styled.div`
  display: flex;
  width: 980px;
  margin: 0 auto;
  min-height: 700px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y 100% 100%;
  .left {
    width: 729px;
    border-right: 1px solid #d3d3d3;
    .left-content {
      padding: 20px 20px 40px;
    }
    .left-songs {
      margin: 20px 0 0 -42px;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .right {
    width: 250px;
  }
`;
