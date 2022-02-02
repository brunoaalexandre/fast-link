import styled, { keyframes } from 'styled-components';

const slideY = keyframes`
  from {
    opacity: 0.5;
      transform: translateY(90px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 169px;
    animation: ${slideY} 0.5s ease-in;
  }

  h1 {
    width: 428px;
    font-size: 85px;
    font-weight: 600;
    animation: ${slideY} 0.5s ease-in;
  }

  h2 {
    font-size: 22px;
    font-weight: normal;
    line-height: 31px;
    animation: ${slideY} 0.5s ease-in;
  }

  form {
    width: 571px;
    margin-top: 80px;
    animation: ${slideY} 0.5s ease-in;
  }

  input {
    width: 100%;
    height: 54px;
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.15);
    border: 0;

    color: #fff;
    padding: 11px 15px;
    font-size: 18px;

    ::placeholder {
      color: #fff;
      font-size: 18px;
      line-height: 21px;
    }
  }

  button {
    width: 100%;
    height: 54px;

    margin-top: 15px;
    background: #fff;

    font-size: 18px;
    line-height: 21px;

    border: 0;
    border-radius: 7px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

  @media (max-width: 615px) {
    img {
      width: 95px;
    }

    h1 {
      font-size: 40px;
      text-align: center
    }

    h2 {
      font-size: 16px;
      text-align: center;
    }

    form {
      width: 400px;
    }
  }
`;
