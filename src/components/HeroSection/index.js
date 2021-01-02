import React, { useState } from "react";
import Video from '../../videos/video.mp4';
import {Button} from "../ButtonElements";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForward
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <video id="VideoBg"  autoPlay loop muted>
                    <source src={Video} type='video/mp4' />
                </video>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new accoun today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to = "signup"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            pimary="true"
                            dark="true"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};
export default HeroSection