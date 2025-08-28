import Intro from "@/components/Subscribe/Intro/Intro";
import * as SC from "./SubscribePageStyled";
import Manual from "@/components/Subscribe/Manual/Manual";
import Order from "@/components/Subscribe/Order/Order";
import { ISubscribePageProps } from "@/utils/types";

const HomePage: React.FC<ISubscribePageProps> = ({orderSubmit}) => {
  return (
    <SC.SubscribePageStyled>
      <Intro />
      <Manual />
      <Order orderSubmit={orderSubmit}/>
    </SC.SubscribePageStyled>
  );
};

export default HomePage;
