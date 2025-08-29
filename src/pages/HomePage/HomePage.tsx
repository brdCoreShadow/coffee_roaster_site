import * as SC from "./HomePageStyled";

import Hero from "@/components/Home/Hero/Hero";
import Collection from "@/components/Home/Collection/Collection";
import Pros from "@/components/Home/Pros/Pros";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";

const HomePage: React.FC = () => {
  return (
    <SC.HomePageStyled>
      <Hero />
      <Collection />
      <Pros />
      <HowItWorks/>
    </SC.HomePageStyled>
  );
};

export default HomePage;
