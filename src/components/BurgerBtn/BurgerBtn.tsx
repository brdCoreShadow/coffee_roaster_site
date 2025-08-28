import * as SC from "./BurgerBtnStyled";

import burgerIcon from "../../assets/images/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../assets/images/shared/mobile/icon-close.svg";
import { TMenuBtnToggle } from "@/utils/types";

const BurgerBtn: React.FC<TMenuBtnToggle> = ({ toggleMenu, isMenu }) => {
  return (
    <SC.BurgerBtnStyled type="button" onClick={toggleMenu}>
      <img src={isMenu ? closeIcon : burgerIcon} alt="burger" />
    </SC.BurgerBtnStyled>
  );
};

export default BurgerBtn;
