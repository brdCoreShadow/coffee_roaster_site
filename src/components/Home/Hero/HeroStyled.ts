import styled from "@emotion/styled";

import bgHeroMob from "../../../assets/images/home/mobile/image-hero-coffeepress.jpg";
import bgHeroTab from "../../../assets/images/home/tablet/image-hero-coffeepress.jpg";
import bgHeroDesk from "../../../assets/images/home/desktop/image-hero-coffeepress.jpg";

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

  @media (min-width: 1280px) {
    margin-bottom: 262px;

    padding-top: 116px;
    padding-bottom: 116px;
    padding-left: 86px;
    padding-right: 502px;

    background-image: url(${bgHeroDesk});
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

    @media (min-width: 1280px) {
      margin-bottom: 32px;

      font-size: 72px;
    }
  }

  & > p {
    margin-bottom: 40px;

    font-size: 15px;
    line-height: 1.67;

    color: #fefcf7;

    opacity: 0.7;

    @media (min-width: 1280px) {

      margin-bottom: 56px;

      font-size: 16px;
      line-height: 1.63;
    }
  }
`;
