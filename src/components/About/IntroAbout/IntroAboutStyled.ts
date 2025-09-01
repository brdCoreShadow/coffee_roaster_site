import styled from "@emotion/styled";

import bgIntroAboutMob from "../../../assets/images/about/mobile/image-hero-whitecup.jpg"
import bgIntroAboutTab from "../../../assets/images/about/tablet/image-hero-whitecup.jpg"

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

& > h3{
    margin-bottom: 24px;

    font-size: 28px;
    font-weight: 900;

    color: #FEFCF7;

    @media (min-width: 768px){
        font-size: 32px;
        line-height: 1.25;
    }
}

& > p{
    font-size: 15px;
    line-height: 1.67;

    color: #FEFCF7;
}
`