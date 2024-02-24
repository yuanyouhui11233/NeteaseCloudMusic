import styled from "styled-components";
export const NewAlbumItemWrapper = styled.div`
  .album-item {
    width: 118px;
    height: 150px;
    margin-left: 11px;
    background-position: -260px 100px;
    box-sizing: border-box;
    .cover {
      position: relative;
      &:hover {
        .icon-play {
          display: block;
        }
      }
      .msk {
        position: absolute;
        top: 0;
        left: 0;
        width: 118px;
        height: 100px;
        background-position: 0 -570px;
      }
      .icon-play {
        position: absolute;
        bottom: 4px;
        right: 22px;
        width: 22px;
        height: 22px;
        background-position: 0 -85px;
        display: none;
      }
    }
    .bottom {
      margin-top: 7px;
      font-size: 12px;
      p {
        width: 90%;
        line-height: 18px;
      }
      .text-area {
        .name {
          &:hover {
            text-decoration: underline;
            color: #000;
          }
        }
      }
      .artist_area {
        .artist {
          &:hover {
            text-decoration: underline;
            color: #666;
          }
        }
      }
    }
  }
`;
