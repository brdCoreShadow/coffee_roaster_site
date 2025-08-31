import Commitment from "@/components/About/Commitment/Commitment";
import * as SC from "./AboutPageStyled";

import IntroAbout from "@/components/About/IntroAbout/IntroAbout";
import Quality from "@/components/About/Quality/Quality";

const AboutPage: React.FC = () => {
  return (
    <SC.AboutPageStyled>
      <IntroAbout />
      <Commitment/>
      <Quality/>
    </SC.AboutPageStyled>
  );
};

export default AboutPage;
