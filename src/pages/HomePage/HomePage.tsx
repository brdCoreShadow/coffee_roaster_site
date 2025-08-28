import Intro from "@/components/Home/Intro/Intro";
import * as SC from "./HomePageStyled";
import Manual from "@/components/Home/Manual/Manual";
import Order from "@/components/Home/Order/Order";
import { IHomePageProps } from "@/utils/types";

const HomePage: React.FC<IHomePageProps> = ({orderSubmit}) => {
  return (
    <SC.HomePageStyled>
      <Intro />
      <Manual />
      <Order orderSubmit={orderSubmit}/>
    </SC.HomePageStyled>
  );
};

export default HomePage;
