import * as SC from "./HeadQuartersStyled";

import ukPic from "../../../assets/images/about/desktop/illustration-uk.svg"
import canadaPic from "../../../assets/images/about/desktop/illustration-canada.svg"
import australiaPic from "../../../assets/images/about/desktop/illustration-australia.svg"

const HeadQuarters: React.FC = () => {
  return (
    <SC.MainCon>
      <h3>Our Headquarters</h3>
      <SC.List>
        <li>
          <div>
            <img src={ukPic} alt="Great Britain" />
          </div>
          <h4>United Kingdom</h4>
          <p>
            68 Asfordby Rd <br />
            Alcaston <br />
            SY6 1YA <br />
            +44 1241 918425
          </p>
        </li>

        <li>
          <div>
            <img src={canadaPic} alt="Canada" />
          </div>
          <h4>Canada</h4>
          <p>
            1527 Eglinton Avenue <br />
            Toronto <br />
            Ontario M4P 1A6 <br />
            +1 416 485 2997
          </p>
        </li>

        <li>
          <div>
            <img src={australiaPic} alt="Australia" />
          </div>
          <h4>Australia</h4>
          <p>
            36 Swanston Street <br />
            Kewell <br />
            Victoria <br />
            +61 3 1234 5678
          </p>
        </li>
      </SC.List>
    </SC.MainCon>
  );
};

export default HeadQuarters;
