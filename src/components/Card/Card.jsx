import React from "react";
import { Wrapper, PriceContainer, Description, Benefits, Button } from "./Card.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const Card = ({ title, price, benefits }) => {
    
    const [bigPrice, cents] = price.split(',')

    return(
        <Wrapper>
            <h3>{title}</h3>

            <PriceContainer>
                <strong>R$</strong>
                <strong>{bigPrice}</strong>
                <small>
                    ,{cents}
                    <span>/mês</span>
                </small>
            </PriceContainer>

            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dignissimos.</Description>

            <ul>
                {
                    benefits.map(benefit => (
                        <Benefits>
                        <FontAwesomeIcon icon={faCheck} className='icon'/>
                        {benefit}
                        </Benefits>
                    ))
                }
            </ul>

            <Button>Assinar</Button>
        </Wrapper>
    )
}