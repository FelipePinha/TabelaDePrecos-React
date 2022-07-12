import React from "react";
import { Wrapper, PriceContainer, Description, Benefits, Button } from "./Card.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const Card = () => {
    return(
        <Wrapper>
            <h3>Título</h3>

            <PriceContainer>
                <strong>R$</strong>
                <strong>0</strong>
                <small>
                    ,00
                    <span>/mês</span>
                </small>
            </PriceContainer>

            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dignissimos.</Description>

            <ul>
                <Benefits>
                    <FontAwesomeIcon icon={faCheck} className='icon'/>
                    Lorem ipsum dolor sit.
                </Benefits>
                <Benefits>
                    <FontAwesomeIcon icon={faCheck} className='icon'/>
                    Lorem ipsum dolor sit.
                </Benefits>
            </ul>

            <Button>Assinar</Button>
        </Wrapper>
    )
}