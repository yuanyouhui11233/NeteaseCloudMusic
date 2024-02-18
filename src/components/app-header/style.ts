import styled from "styled-components";
export const HeaderWrapper = styled.div`
  background: #242424;
  height: 75px;
  font-size: 14px;
  color: #fff;
  .h-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    line-height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .title-list {
    display: flex;
    align-items: center;
    .item {
      position: relative;
      a {
        padding: 0 20px;
        height: 70px;
        line-height: 70px;
        color: #ccc;
      }
      a:hover,
      .active {
        background-color: #000;
        color: #fff;
        text-decoration: none;
      }
    }
    /* 给下载客户端 添加一个 hot的精灵图 在js中url路径填写时引入不成功，后续解决 */
    /* .item:last-child {
      position: relative;
    }
    .item:last-child::after {
      content: "1";
      position: absolute;
      top: 0;
      background: url("../../assets/img/sprite_01.png");
    } */
    .active .icon {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
      width: 11px;
      height: 6px;
      background-color: skyblue;
      background-position: -226px 0;
    }
  }
`;
export const HeaderRight = styled.div`
  flex: 1;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  .search {
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .serach-input {
    border-radius: 20px;
    width: 158px;
    height: 32px;
  }
  .bilog {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #ccc;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    cursor: pointer;
  }
  .login {
    .login-link {
      color: #787878;
    }
    .login-link:hover {
      color: #999;
    }
  }
`;
