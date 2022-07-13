import React, { useState } from "react";
import { Wrapper } from "./App.styles";
import { Card } from "../Card/Card";
import servicesMock from '../../mocks/services.json'

export const App = () => {
    const [services, setServices] = useState(servicesMock.services)
    

    return (
        <Wrapper>
            {
                services.map(service => (
                    <Card 
                        title={service.title}
                        price={service.price}
                        benefits={service.benefits}
                        key={service.id}
                    />
                ))
            }
        </Wrapper>
    )
}