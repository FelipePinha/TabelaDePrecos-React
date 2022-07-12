import React from "react";
import { Wrapper } from "./App.styles";
import { Card } from "../Card/Card";

export const App = () => {
    return (
        <Wrapper>
            <Card />
            <Card />
            <Card />
        </Wrapper>
    )
}