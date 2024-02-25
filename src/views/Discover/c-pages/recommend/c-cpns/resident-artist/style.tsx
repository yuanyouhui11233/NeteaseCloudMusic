import styled from "styled-components";
export const ResidentArtistWrapper = styled.div`
  margin-top: 20px;
  .header {
  }
  .content {
    margin: 6px 0 14px 20px;
    .item {
      display: flex;
      width: 210px;
      height: 62px;
      background: #fafafa;
      margin-top: 14px;
      &:hover {
        background: #f4f4f4;
      }
      .i-img {
        width: 62px;
        height: 62px;
        background-color: skyblue;
      }
      .i-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 133px;
        padding-left: 14px;
      }
    }
  }
  .footer-btn {
    .btn {
      margin-left: 20px;
      padding: 0 5px 0 0;
      width: 205px;
      height: 31px;
      border-radius: 4px;
      line-height: 31px;
      text-align: center;
      background-position: right -100px;
      &:hover {
        background-position: right -182px;
      }
      i {
        display: inline-block;
        width: 172px;
        height: 31px;
        padding: 0 15px 0 20px;
        color: #333;
        font-weight: bold;
        font-style: normal;
        background-position: 0 -59px;
        &:hover {
          background-position: 0 -141px;
        }
      }
    }
  }
`;
