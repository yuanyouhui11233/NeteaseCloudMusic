import styled from "styled-components";
export const NavWrapper = styled.div`
  .subnav {
    height: 35px;
    background-color: #c20c0c;
    box-sizing: border-box;
    .wrap {
      width: 1100px;
      height: 100%;
      margin: 0 auto;
      .menu {
        display: flex;
        align-items: center;
        padding-left: 180px;

        .m-item {
          color: #fff;
          height: 20px;
          padding: 0 13px;
          margin: 7px 17px 0;
          display: block;
          line-height: 20px;
          border-radius: 10px;
          font-style: normal;
        }
        .m-item:hover,
        .active {
          background-color: #9b0909;
        }
      }
    }
  }
`;
