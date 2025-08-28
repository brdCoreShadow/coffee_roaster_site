import Hero from "@/components/Home/Hero/Hero";
import * as SC from "./HomePageStyled";
import Collection from "@/components/Home/Collection/Collection";
const HomePage: React.FC = () => {
  return (
    <SC.HomePageStyled>
      <Hero />
      <Collection/>
    </SC.HomePageStyled>
  );
};

export default HomePage;
