import * as SC from "./OrderStyled";

const Order: React.FC = () => {
  return (
    <SC.OrderCon>
      <ul>
        <li>
          <button>
            <span>How do you drink your coffee?</span>
          </button>
          <ul>
            <li>
              <h5>Capsule</h5>
              <p>Compatible with Nespresso systems and similar brewers</p>
            </li>
            <li>
              <h5>Filter</h5>
              <p>
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </li>
            <li>
              <h5>Espresso</h5>
              <p>
                Dense and finely ground beans for an intense, flavorful
                experience
              </p>
            </li>
          </ul>
        </li>
        <li>
          <button>
            <span>What type of coffee?</span>
          </button>
          <ul>
            <li>
              <h5>Single Origin</h5>
              <p>
                Distinct, high quality coffee from a specific family-owned farm
              </p>
            </li>
            <li>
              <h5>Decaf</h5>
              <p>
                Just like regular coffee, except the caffeine has been removed
              </p>
            </li>
            <li>
              <h5>Blended</h5>
              <p>
                Combination of two or three dark roasted beans of organic
                coffees
              </p>
            </li>
          </ul>
        </li>
        <li>
          <button>
            <span>How much would you like?</span>
          </button>
          <ul>
            <li>
              <h5>250g</h5>
              <p>
                Perfect for the solo drinker. Yields about 12 delicious cups.
              </p>
            </li>
            <li>
              <h5>500g</h5>
              <p>
                Perfect option for a couple. Yields about 40 delectable cups.
              </p>
            </li>
            <li>
              <h5>1000g</h5>
              <p>
                Perfect for offices and events. Yields about 90 delightful cups.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <button>
            <span>Want us to grind them?</span>
          </button>
          <ul>
            <li>
              <h5>Wholebean</h5>
              <p>Best choice if you cherish the full sensory experience</p>
            </li>
            <li>
              <h5>Filter</h5>
              <p>
                For drip or pour-over coffee methods such as V60 or Aeropress
              </p>
            </li>
            <li>
              <h5>Cafetiére</h5>
              <p>
                Course ground beans specially suited for french press coffee
              </p>
            </li>
          </ul>
        </li>
        <li>
          <span>How often should we deliver?</span>
          <ul>
            <li>
              <h5>Every week</h5>
              <p>$7.20 per shipment. Includes free first-class shipping.</p>
            </li>
            <li>
              <h5>Every 2 weeks</h5>
              <p>$9.60 per shipment. Includes free priority shipping.</p>
            </li>
            <li>
              <h5>Every month</h5>
              <p>$12.00 per shipment. Includes free priority shipping.</p>
            </li>
          </ul>
        </li>
      </ul>
    </SC.OrderCon>
  );
};

export default Order;
