import styled from "@emotion/styled";

import bgIntroAboutMob from "../../../assets/images/about/mobile/image-hero-whitecup.jpg"
import bgIntroAboutTab from "../../../assets/images/about/tablet/image-hero-whitecup.jpg"
import bgIntroAboutDesk from "../../../assets/images/about/desktop/image-hero-whitecup.jpg"

export const MainCon = styled.div`
margin-bottom: 120px;

padding-top: 110px;
padding-bottom: 88px;
padding-left: 24px;
padding-right: 24px;

text-align: center;

background-image: url(${bgIntroAboutMob});
background-size: contain;

border-radius: 10px;

@media (min-width: 768px){
    margin-bottom: 144px;

    padding-top: 118px;
    padding-bottom: 118px;
    padding-left: 58px;
    padding-right: 234px;

    text-align: left;

    background-image: url(${bgIntroAboutTab});
}

@media (min-width: 1280px){
    margin-bottom: 168p;

    padding-top: 136px;
    padding-bottom: 136px;
    padding-left: 86px;
    padding-right: 550px;

    background-image: url(${bgIntroAboutDesk});
    background-size: cover;
}

& > h3{
    margin-bottom: 24px;

    font-size: 28px;
    font-weight: 900;

    color: #FEFCF7;

    @media (min-width: 768px){
        font-size: 32px;
        line-height: 1.25;
    }

    @media (min-width: 1280px){
        font-size: 40px;
        line-height: 1.2;
    }
}

& > p{
    font-size: 15px;
    line-height: 1.67;

    color: #FEFCF7;

    @media (min-width: 1280px){
        font-size: 16px;
    }
}
`