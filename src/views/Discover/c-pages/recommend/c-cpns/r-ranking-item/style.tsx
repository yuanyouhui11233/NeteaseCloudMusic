import styled from "styled-components";
export const RankingItemWrapper = styled.div`
  /* flex: 1; */
  width: 230px;
  &:last-child {
    width: 228px;
  }
  .top {
    display: flex;
    padding: 20px 0 0 19px;
    height: 100px;
    .cover {
      position: relative;
      .r-img {
        width: 80px;
        height: 80px;
      }
      .msk {
        position: absolute;
        top: 0;
        background-position: -145px -57px;
        width: 80px;
        height: 80px;
      }
    }
    .title {
      margin: 6px 0 0 10px;
      .list-tit {
        &:hover {
          text-decoration: underline;
        }
      }
      .btn {
        margin-top: 10px;
        > button {
          width: 22px;
          height: 22px;
          text-indent: -9999px;
          margin-right: 10px;
          cursor: pointer;
        }
        .play-icon {
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .collect-icon {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .list .single:nth-child(-n + 3) .song-rank {
    color: #c10d0c;
  }
  .list {
    .single {
      height: 32px;
      line-height: 32px;
      display: flex; // 当operator显示时，三个子元素是flex布局
      &:hover {
        .operator {
          display: block;
        }
      }

      .song-rank {
        display: inline-block;
        text-align: center;
        width: 35px;
        height: 33px;
        color: #666;
        font-size: 16px;
      }
      .song-name {
        cursor: pointer;
        flex: 1;
        &:hover {
          text-decoration: underline;
        }
      }
      .operator {
        display: none;
        > button {
          width: 17px;
          height: 17px;
          margin-right: 10px;
          text-indent: -9999px;
          cursor: pointer;
        }
        .play-icon {
          background-position: -267px -268px;
          &:hover {
            background-position: -267px -288px;
          }
        }

        .add-icon {
          background-position: 2px -698px;
          &:hover {
            background-position: -20px -698px;
          }
        }
        .collect-icon {
          background-position: -296px -268px;
          &:hover {
            background-position: -296px -288px;
          }
        }
      }
    }
  }
  .footer {
    height: 32px;
    display: flex;
    justify-content: flex-end;
    justify-items: center;
    padding-right: 30px;
    .more {
      line-height: 32px;
      color: #000;
    }
  }
`;
