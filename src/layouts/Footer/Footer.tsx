import { IChildProps } from "@/utils/types";
import * as SC from "./FooterStyled"

const Footer:React.FC<IChildProps> = ({children}) => {
    return ( 
        <SC.FooterStyled>
          {children}
        </SC.FooterStyled>
     );
}
 
export default Footer;