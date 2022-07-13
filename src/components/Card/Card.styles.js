import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #fff;
    width: 300px;
    min-width: 24%;
    height: 65%;

    display: flex;
    flex-direction: column;
    padding: 20px;

    border-radius: 10px;
    font-size: 18px;
    color: #1d539e;
    position: relative;
`

export const PriceContainer = styled.div`
    margin: 15px 0;
    font-size: 18px;

    strong {
        font-weight: 900;
        font-size: 25px;
    }

    small {
        font-weight: 700;
    }

    span {
        font-weight: 300;
        color: #828799;
    }
`

export const Description = styled.p`
    color: #828799;
    font-size: 16px;
    margin-bottom: 40px;
`

export const Benefits = styled.li`
    list-style: inside none;
    margin-bottom: 10px;
    

    .icon {
        margin-right: 10px;
        color: #00ff00;
    }
`

export const Button = styled.button`
    position: absolute;
    width: 90%;
    padding: 20px;

    background: none;
    border: 3px solid #1d539e;
    color: #1d539e;
    border-radius: 10px;
    

    bottom: 5%;
    right: 5%;

    font-size: 22px;
    letter-spacing: 1.3px;

    cursor: pointer;

    &:hover{
        background-color: #1d539e;
        color: #fff;
        transition: 400ms;
    }
`