import * as SC from "./AboutPageStyled";

import IntroAbout from "@/components/About/IntroAbout/IntroAbout";

const AboutPage: React.FC = () => {
  return (
    <SC.AboutPageStyled>
      <IntroAbout />
    </SC.AboutPageStyled>
  );
};

export default AboutPage;
