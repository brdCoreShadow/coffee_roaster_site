import Intro from "@/components/Home/Intro/Intro";
import * as SC from "./HomePageStyled";
import Manual from "@/components/Home/Manual/Manual";
import Order from "@/components/Home/Order/Order";

const HomePage: React.FC = () => {
  return (
    <SC.HomePageStyled>
      <Intro />
      <Manual />
      <Order/>
    </SC.HomePageStyled>
  );
};

export default HomePage;
