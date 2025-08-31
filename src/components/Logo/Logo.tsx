import { IPropsStyled } from "@/utils/types";
import logoIcon from "../../assets/images/shared/mobile/logo.svg"

import * as SC from "./LogoStyled"

const Logo:React.FC<Partial <IPropsStyled>> = ({location}) => {
    return ( 
        <SC.LogoCon location={location}>
            <SC.LogoIconThumb location={location}>
                <img src={logoIcon} alt="logo" />
            </SC.LogoIconThumb>
            <h3>coffeeroasters</h3>
        </SC.LogoCon>
     );
}
 
export default Logo;