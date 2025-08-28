import * as SC from "./SocNetStyled";

import fbIcon from "../../assets/images/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../assets/images/shared/desktop/icon-twitter.svg";
import instagramIcon from "../../assets/images/shared/desktop/icon-instagram.svg";

const SocNet: React.FC = () => {
  return (
    <SC.List>
      <li>
        <a href="https://www.facebook.com/sasha.berdichevsky">
          {" "}
          <img src={fbIcon} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="https://x.com/UaBerd">
          <img src={twitterIcon} alt="twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/berd__man/">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </li>
    </SC.List>
  );
};

export default SocNet;
