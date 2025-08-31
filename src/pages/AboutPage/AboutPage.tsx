import Commitment from "@/components/About/Commitment/Commitment";
import * as SC from "./AboutPageStyled";

import IntroAbout from "@/components/About/IntroAbout/IntroAbout";
import Quality from "@/components/About/Quality/Quality";
import HeadQuarters from "@/components/About/HeadQuarters/HeadQuarters";

const AboutPage: React.FC = () => {
  return (
    <SC.AboutPageStyled>
      <IntroAbout />
      <Commitment/>
      <Quality/>
      <HeadQuarters/>
    </SC.AboutPageStyled>
  );
};

export default AboutPage;
