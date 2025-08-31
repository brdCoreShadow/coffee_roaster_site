import { IChildProps } from "@/utils/types";
import ReactDOM from "react-dom";

const SummaryPortal:React.FC<IChildProps> = ({children}) => {
    const portalRoot = document.getElementById("summary-portal");
    if (!portalRoot) return null;

    return ReactDOM.createPortal(children, portalRoot)
}
 
export default SummaryPortal;