import styled from "styled-components";
export const NewAlbumWrapper = styled.div`
  .disk-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 37px;
    height: 186px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;
    .arrow {
      position: relative;
      top: -10px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
    .inner-content {
      height: 184px;
      flex: 1;
      overflow: hidden;

      .album-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 184px;
        margin: 15px 0 0 0;
        box-sizing: border-box;
      }
    }
  }
`;
