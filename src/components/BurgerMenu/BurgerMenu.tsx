import LinksList from "../LinksList/LinksList";
import * as SC from "./BurgerMenuStyled";

const BurgerMenu: React.FC = () => {
  return (
    <SC.BurgerMenuStyled>
      <LinksList />
    </SC.BurgerMenuStyled>
  );
};

export default BurgerMenu;
