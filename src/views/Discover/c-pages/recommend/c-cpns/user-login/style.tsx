import styled from "styled-components";
export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  .desc {
    width: 205px;
    line-height: 22px;
    margin: 0 auto;
    padding: 16px 0;
    color: #666;
    font-size: 12px;
  }
  .btn-login {
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    margin: 0 auto;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;
    &:hover {
      background-position: -110px -195px;
      text-decoration: none;
    }
  }
`;
