import styled from "@emotion/styled";

import bgHeroMob from "../../../assets/images/home/mobile/image-hero-coffeepress.jpg"

export const HeroCon = styled.div`
margin-bottom: 120px;

padding-top: 100px;
padding-bottom: 100px;
padding-left: 24px;
padding-right: 24px;

text-align: center;

background-image: url(${bgHeroMob});

border-radius: 10px;

& > h3{
    margin-bottom: 24px;

    font-size: 40px;
    font-weight: 900;

    color: #FEFCF7;
}

& > p{
    margin-bottom: 40px;

    font-size: 15px;
    line-height: 1.67;

    color: #FEFCF7;

    opacity: 0.7;
}

& > a{
    display: inline-block;
    width: 217px;

    padding-top: 16px;
    padding-bottom: 16px;

    text-align: center;

    font-size: 18px;
    line-height: 1.39;
    font-weight: 900;

    color: #FEFCF7;

    background-color: #0E8784;

    border-radius: 6px;
}
`