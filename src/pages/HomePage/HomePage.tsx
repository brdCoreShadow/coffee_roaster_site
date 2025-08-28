import Hero from "@/components/Home/Hero/Hero";
import * as SC from "./HomePageStyled";
const HomePage: React.FC = () => {
  return (
    <SC.HomePageStyled>
      <Hero />
    </SC.HomePageStyled>
  );
};

export default HomePage;
