import * as SC from "./HeaderStyled";

import { IChildProps } from "@/utils/types";

const Header: React.FC<IChildProps> = ({ children }) => {
  return <SC.HeaderStyled>{children}</SC.HeaderStyled>;
};

export default Header;
