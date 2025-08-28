import * as SC from "./CollectionStyled"


const Collection:React.FC = () => {
    return ( 
        <SC.CollectionCon>
            <h3>our collection</h3>
            <ul>
                <li>
                    <div>
                        <img src="" alt="espresso" />
                    </div>
                    <h5>Gran Espresso</h5>
                    <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                </li>
                <li>
                    <div>
                        <img src="" alt="planalto" />
                    </div>
                    <h5>Planalto</h5>
                    <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                </li>
                <li>
                    <div>
                        <img src="" alt="piccollo" />
                    </div>
                    <h5>Piccollo</h5>
                    <p>Mild and smooth blend featuring notes of toasted almond and dried cherry </p>
                </li>
                <li>
                    <div>
                        <img src="" alt="danche" />
                    </div>
                    <h5>Danche</h5>
                    <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                </li>
            </ul>
        </SC.CollectionCon>
     );
}
 
export default Collection;