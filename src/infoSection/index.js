import React from "react";
import { Button } from "../components/ButtonElements";
import Card from '../images/car.svg';
import Piggybank from '../images/Piggybank.svg';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
    BtnWrap,
    ImgWrap
} from "./infoElements";


const InfoSection = ({lightBg, id, imgStart, topLine,lightText,headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {

        return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={80}
                                        primary={primary ? 0 : 1}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                            <Column2>
                                <ImgWrap>

                              {/*  <Img src={img} alt={alt}/>*/}
                               <Card style={{
                                        width: '100%',
                                        margin: '0 0 10px 0',
                                        paddingRight: '0',
                                    }} alt={alt}/>
                                </ImgWrap>
                            </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
export default InfoSection