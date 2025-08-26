import styled from "@emotion/styled";

import heroCupPicMob from "../../../assets/images/home/mobile/image-hero-blackcup.jpg"

export const IntroCon = styled.div`
margin-bottom: 120px;

padding-top: 100px;
padding-bottom: 136px;
padding-left: 24px;
padding-right: 24px;

text-align: center;

color: #FEFCF7;

background-image: url(${heroCupPicMob});
background-size: cover;

border-radius: 10px;

& > h3{
    margin-bottom: 22px;

    font-size: 40px;
    font-weight: 900;
}

& > p{
    font-size: 15px;
    line-height: 1.67;

    opacity: 0.7;
}
`