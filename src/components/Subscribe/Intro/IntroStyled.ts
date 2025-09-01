import styled from "@emotion/styled";

import heroCupPicMob from "../../../assets/images/home/mobile/image-hero-blackcup.jpg";
import heroCupPicTab from "../../../assets/images/plan/tablet/image-hero-blackcup.jpg";

export const IntroCon = styled.div`
  margin-bottom: 120px;

  padding-top: 100px;
  padding-bottom: 136px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  color: #fefcf7;

  background-image: url(${heroCupPicMob});
  background-size: cover;

  border-radius: 10px;

  @media (min-width: 768px) {
    margin-bottom: 144px;

    padding-top: 126px;
    padding-bottom: 126px;
    padding-left: 58px;
    padding-right: 232px;

    text-align: left;

    background-image: url(${heroCupPicTab});
    background-size: cover;
  }

  & > h3 {
    margin-bottom: 22px;

    font-size: 40px;
    font-weight: 900;

    @media (min-width: 768px){
        margin-bottom: 24px;

        font-size: 48px;
    }
  }

  & > p {
    font-size: 15px;
    line-height: 1.67;

    opacity: 0.7;
  }
`;
