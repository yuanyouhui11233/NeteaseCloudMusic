import styled from "styled-components";
export const SingleSongWrapper = styled.div`
  width: 140px;
  height: 204px;
  padding: 0 0 30px 42px;
  /* background-color: skyblue; */
  .s-cover {
    position: relative;
  }
  .s-cover-1 {
    width: 140px;
    height: 140px;
    .cover-img {
      width: 140px;
      height: 140px;
    }
    .msk {
      position: absolute;
      top: 0;
      width: 140px;
      height: 140px;
      background-position: 0 0;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      height: 27px;
      width: 100%;
      color: #ccc;
      background-position: 0 -537px;
      .layout {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        .l-left {
          height: 100%;
          .icon-headset {
            display: inline-block;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
            background-color: transparent;
            margin: 9px 5px 0px 10px;
          }
        }
        .icon-play {
          width: 16px;
          height: 17px;
          text-indent: -9999px;
          background-position: 0 0;
          margin-right: 10px;
        }
      }
    }
  }
  .desc {
    .desc-text {
      font-size: 14px;
      margin: 8px 0 3px;
      color: #000;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
