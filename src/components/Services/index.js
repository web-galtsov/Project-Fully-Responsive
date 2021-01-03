import React from "react";
import Icon1 from "../../images/car.svg";
import Icon2 from "../../images/svg-01.svg";
import Icon3 from "../../images/svg-03.svg";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesH2,
    ServicesP,
    Icon
} from "./servicesElements";

const Services = () => {
    return (
        <ServicesContainer id = "services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                  <Icon>
                     <Icon1 height="160px"  width="160px"/>
                  </Icon>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <Icon>
                        <Icon2 height="160px"  width="160px"/>
                    </Icon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <Icon>
                        <Icon3 height="160px"  width="160px"/>
                    </Icon>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
};
export default Services;