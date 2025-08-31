import * as SC from "./SharedLayoutStyled"
import { Outlet } from "react-router-dom";

const SharedLayout:React.FC = () => {
    return ( 
        <SC.LayoutStyled>
            <Outlet/>
        </SC.LayoutStyled>
     );
}
 
export default SharedLayout;