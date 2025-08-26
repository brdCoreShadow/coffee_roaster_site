import Intro from "@/components/Home/Intro/Intro";
import * as SC from "./HomePageStyled";
import Manual from "@/components/Home/Manual/Manual";

const HomePage: React.FC = () => {
  return (
    <SC.HomePageStyled>
      <Intro />
      <Manual />
    </SC.HomePageStyled>
  );
};

export default HomePage;
