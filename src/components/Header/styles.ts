import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 55px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: right;
  background-color: transparent;
  color: #fff;
  position: absolute;

  padding-right: 50px;

  p {
    margin-right: 5px;
  }

  button {
    background: #00d457;
    margin-top: 1px;
    margin-left: 14px;
    height: 35px;
    font-size: 19px;
    color: var(--background);
    padding: 5px 15px;
  }
  `;
