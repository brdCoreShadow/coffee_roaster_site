import * as SC from "./ProsStyled";

import beanPic from "../../../assets/images/home/desktop/icon-coffee-bean.svg";
import presentPic from "../../../assets/images/home/desktop/icon-gift.svg";
import truckPic from "../../../assets/images/home/desktop/icon-truck.svg";

const Pros: React.FC = () => {
  return (
    <SC.MainCon>
      <SC.ProsCon>
        <h3>Why choose us?</h3>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </SC.ProsCon>
      <SC.ProsList>
        <li>
          <div>
            <img src={beanPic} alt="bean" loading="lazy"/>
          </div>
          <h5>Best quality</h5>
          <p>
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </li>
        <li>
          <div>
            <img src={presentPic} alt="present" loading="lazy"/>
          </div>
          <h5>Exclusive benefits</h5>
          <p>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </li>
        <li>
          <div>
            <img src={truckPic} alt="truck" loading="lazy"/>
          </div>
          <h5>Free shipping</h5>
          <p>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </li>
      </SC.ProsList>
    </SC.MainCon>
  );
};

export default Pros;
