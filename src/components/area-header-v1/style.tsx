import styled from "styled-components";
export const AreaHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  background-position: -230px -154px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;

  .h-left {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    .keyword {
      display: flex;
      margin: 0 0 0 20px;
      .item {
        .link {
          cursor: pointer;
          color: #666;
          font-size: 12px;
          &:hover {
            text-decoration: underline;
          }
        }
        .line {
          margin: 0 10px;
          color: #ccc;
        }
        &:last-child {
          .line {
            display: none;
          }
        }
      }
    }
  }
  .h-right {
    display: flex;
    align-items: center;
    .more {
      cursor: pointer;
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
