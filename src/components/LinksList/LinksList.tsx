import { IPropsStyled } from "@/utils/types";
import * as SC from "./LinksListStyled"

const LinksList:React.FC<Partial <IPropsStyled>> = ({location}) => {
  return (
    <SC.ListStyled location={location!}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="about">About Us</a>
      </li>
      <li>
        <a href="subscribe">Create Your Plan</a>
      </li>
    </SC.ListStyled>
  );
};

export default LinksList;
