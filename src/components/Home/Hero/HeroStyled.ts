import styled from "@emotion/styled";

import bgHeroMob from "../../../assets/images/home/mobile/image-hero-coffeepress.jpg";
import bgHeroTab from "../../../assets/images/home/tablet/image-hero-coffeepress.jpg";

export const HeroCon = styled.div`
  margin-bottom: 120px;

  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-image: url(${bgHeroMob});

  border-radius: 10px;

  @media (min-width: 768px) {
    margin-bottom: 144px;

    padding-top: 104px;
    padding-bottom: 104px;
    padding-left: 58px;
    padding-right: 234px;

    text-align: left;

    background-image: url(${bgHeroTab});
    background-size: cover;
  }

  & > h3 {
    margin-bottom: 24px;

    font-size: 40px;
    font-weight: 900;

    color: #fefcf7;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }

  & > p {
    margin-bottom: 40px;

    font-size: 15px;
    line-height: 1.67;

    color: #fefcf7;

    opacity: 0.7;
  }
`;
