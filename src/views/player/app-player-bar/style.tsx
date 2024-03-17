import styled from "styled-components";
export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  height: 53px;
  width: 100%;
  background-position: 0 0;
  background-repeat: repeat-x;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -4px;
  }
`;
interface IBarControl {
  $isPlaying: boolean;
}
export const BarControl = styled.div<IBarControl>`
  display: flex;
  align-items: center;
  .btn {
    cursor: pointer;
    text-indent: -9999px;
  }
  .prev,
  .next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0
      ${(props) => (props.$isPlaying ? "-165px" : "-204px")};
    &:hover {
      background-position: -40px
        ${(props) => (props.$isPlaying ? "-165px" : "-204px")};
    }
  }
`;
export const BarPlayerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 642px;
  .bg {
    width: 34px;
    height: 34px;
    background-position: 0 -80px;
    .image {
      border-radius: 5px;
    }
  }

  .info {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 15px;
    .song {
      display: flex;
      margin-left: 5px;
      .text:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      .song-name {
        color: #e8e8e8;
      }
      .singer-name {
        margin-left: 10px;
        color: #9b9b9b;
      }
    }
    .progress {
      display: flex;
      align-items: center;

      /* antd Slider样式的修改 */
      .ant-slider {
        width: 466px;
        margin: 5px;
        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }
        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -5px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
          &::after {
            content: none;
          }
        }
      }

      .time {
        display: flex;
        align-items: center;
        padding-left: 10px;
        .current {
          color: #a1a1a1;
        }
        .duration {
          margin: 0 3px;
          color: #797979;
        }
      }
    }
  }
`;
interface IBarOperator {
  $playMode: 0 | 1 | 2;
}
export const BarOperator = styled.div<IBarOperator>`
  display: flex;
  align-items: center;
  .btn {
    width: 25px;
    height: 25px;
    margin-right: 4px;
    cursor: pointer;
  }
  .left {
    padding-right: 13px;
    .pip_icon {
      background: url(${require("@/assets/img/pip-icon.png")}) no-repeat;
      background-position: 0 0;
      &:hover {
        background-position: 0 -25px;
      }
    }
    .favor {
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }
  .right {
    position: relative;
    .volume_bar {
      position: absolute;
      top: -127px;
      left: -8px;
      width: 32px;
      height: 113px;
      .bar_bg {
        width: 32px;
        height: 113px;
        background-position: 0 -503px;
      }
      .vbg {
        position: absolute;
        top: 10px;
        left: 13px;
        background-color: red;
        width: 4px;
        height: 93px;
        .current {
        }
        .circle {
          position: absolute;
          left: -7px;
          width: 18px;
          height: 20px;
          background-position: -40px -250px;
          cursor: pointer;
          &:hover {
            background-position: -40px -280px;
          }
        }
      }
    }
    .ctrl {
      display: flex;
      .volume {
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      .loop {
        &:hover {
          /* background-position: -33px -344px; */
        }
        background-position: ${(props) => {
          switch (props.$playMode) {
            case 0:
              return "-3px -344px;";
            case 1:
              return "-66px -248px;"; // "-92px -248px;"
            case 2:
              return "-66px -344px;";
          }
        }};
      }

      .playlist {
        width: 59px;
        color: #666;
        padding-left: 14px;
        background-position: -44px -69px;
        &:hover {
          background-position: -44px -99px;
        }
      }
    }
  }
`;
