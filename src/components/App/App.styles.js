import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    overflow-x: hidden;

    @media (max-width: 800px) {
        flex-direction: column;
        row-gap: 30px;
        justify-content: flex-start;
        padding: 20px;
    }
`