import { IChildProps } from "@/utils/types";
import ReactDOM from "react-dom";

const BurgerPortal:React.FC<IChildProps> = ({children}) => {
    const portalRoot = document.getElementById("burger-portal");
    if (!portalRoot) return null;

    return ReactDOM.createPortal(children, portalRoot)
}
 
export default BurgerPortal;