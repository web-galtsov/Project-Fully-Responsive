import React, { useState } from "react";
import Video from '../../videos/video.mp4';
import {Button} from "../ButtonElement";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
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
        <HeroContainer>
            <HeroBg>
              {/* <VideoBg controls autoPlay loop muted src={Video} type="video/mp4" />*/}

              <VideoBg>
                   <video controls autoPlay loop muted style={{
                       width: '100%',
                       height: '800px',
                       objectFit: 'cover',
                       background: '#232a34'}}>
                       <source src={Video} type='video/mp4' />
                   </video>
              </VideoBg>

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
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};
export default HeroSection