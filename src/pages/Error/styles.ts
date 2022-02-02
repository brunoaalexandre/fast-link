import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 48px;
        font-weight: 500;
        color: #fff;
        text-align: center;
    }

    button {
        background-color: #fff;
        width: 273px;
        height: 46px;

        border-radius: 6px;
        color: var(--background);
        font-weight: bold;
        margin: 14px 0;
        padding: 12px 18px;
        text-decoration: none;
    }
`;
