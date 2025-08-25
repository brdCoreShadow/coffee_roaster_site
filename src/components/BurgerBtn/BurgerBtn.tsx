import * as SC from "./BurgerBtnStyled";

import burgerIcon from "../../assets/images/shared/mobile/icon-hamburger.svg";

const BurgerBtn: React.FC = () => {
  return (
    <SC.BurgerBtnStyled type="button">
      <img src={burgerIcon} alt="burger" />
    </SC.BurgerBtnStyled>
  );
};

export default BurgerBtn;
