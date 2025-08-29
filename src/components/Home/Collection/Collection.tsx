import * as SC from "./CollectionStyled"

import espressoPic from "../../../assets/images/home/desktop/image-gran-espresso.png"
import planaltoPic from "../../../assets/images/home/desktop/image-planalto.png"
import piccolloPic from "../../../assets/images/home/desktop/image-piccollo.png"
import danchePic from "../../../assets/images/home/desktop/image-danche.png"

const Collection:React.FC = () => {
    return ( 
        <SC.CollectionCon>
            <h3>our collection</h3>
            <SC.List>
                <li>
                    <div>
                        <img src={espressoPic} alt="espresso" />
                    </div>
                    <h5>Gran Espresso</h5>
                    <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                </li>
                <li>
                    <div>
                        <img src={planaltoPic} alt="planalto" />
                    </div>
                    <h5>Planalto</h5>
                    <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                </li>
                <li>
                    <div>
                        <img src={piccolloPic} alt="piccollo" />
                    </div>
                    <h5>Piccollo</h5>
                    <p>Mild and smooth blend featuring notes of toasted almond and dried cherry </p>
                </li>
                <li>
                    <div>
                        <img src={danchePic} alt="danche" />
                    </div>
                    <h5>Danche</h5>
                    <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                </li>
            </SC.List>
        </SC.CollectionCon>
     );
}
 
export default Collection;