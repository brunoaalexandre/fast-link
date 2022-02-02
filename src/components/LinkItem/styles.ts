import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  position: absolute;
  bottom: 18px;
  background: #fff;
  padding: 14px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  color: #172742;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between !important;

    button {
      border: 0;
      background: transparent !important;
    }

  span {
    margin: 14px 0;
    color: #a7a7a705;
  }
}
`;

export const ButtonLink = styled.button`
    background: #172742;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    height: 38px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    margin-top: 15px;

    svg {
      transition: filter 1s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    &:active {
      background: #00d457;
    }
`;
