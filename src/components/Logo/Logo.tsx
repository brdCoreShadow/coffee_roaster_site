import logoIcon from "../../assets/images/shared/mobile/logo.svg"

import * as SC from "./LogoStyled"

const Logo:React.FC = () => {
    return ( 
        <SC.LogoCon>
            <SC.LogoIconThumb>
                <img src={logoIcon} alt="logo" />
            </SC.LogoIconThumb>
            <h3>coffeeroasters</h3>
        </SC.LogoCon>
     );
}
 
export default Logo;