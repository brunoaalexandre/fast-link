import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;

    display: flex;
    flex-direction: column;
    align-items: initial;

    margin: 32px auto 0 auto;
    padding: 15px;

    header {
        display: flex;
        flex-direction: row;
        align-items: center;

        h1 {
            font-size: 60px;
            color: #fff;
            font-weight: 600;
            line-height: 70px;
        }

        svg {
            margin-right: 14px;
            color: #fff;
        }
    }

    div {
        width: 700;
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-top: 8px;

        :last-child {
          margin-bottom: 18px;
        }
    }

    button {
      border: 0;
      width: 100%;
      min-width: 80%;
      height: 46px;
      display: flex;
      align-items: center;
      padding: 0 14px;

      background: rgba(255, 255, 255, 0.15);

      border-radius: 4px;
      margin-right: 14px;

      font-size: 18px;
      color: #fff;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 24px;

      svg {
        margin-right: 14px;
      }
    }

    svg {
      border: 0;
      background: transparent;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
        cursor: pointer;
      }

    }

    @media (max-width: 700px) {
      width: 90%;
      /* padding: 15px; */

      header {
        h1 {
          font-size: 40px;
        }
      }

      div {
        width: 100%;
      }

      button {
        width: 100%;

        svg {
          display: none;
        }
      }
    }
`;
