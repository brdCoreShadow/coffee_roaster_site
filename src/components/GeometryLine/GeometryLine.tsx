import { IPropsStyled } from "@/utils/types";
import * as SC from "./GeometryLineStyled"

const GeometryLine:React.FC<IPropsStyled> = ({location}) => {
    return ( 
        <SC.Line>
            <SC.CircleList location={location}>
                <li></li>
                <li></li>
                <li></li>
            </SC.CircleList>
        </SC.Line>
     );
}
 
export default GeometryLine;