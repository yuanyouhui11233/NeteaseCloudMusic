import styled from "styled-components";
export const HotAnthorWrapper = styled.div`
  margin-top: 30px;
  .anthor-list {
    margin: 20px 0 0 20px;

    .item {
      display: flex;
      width: 210px;
      height: 50px;
      .cover {
        width: 40px;
        margin-right: 10px;
        cursor: pointer;
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        .desc {
          line-height: 21px;
        }
        .name {
          line-height: 21px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
