import * as SC from "./HowItWorksStyled"

import CreatePlanBtn from "@/components/CreatePlanBtn/CreataPlanBtn";

const HowItWorks:React.FC = () => {
  return (
    <SC.MainCon>
      <h3>How it works</h3>
      <SC.List>
        <li>
          <h4>01</h4>
          <h5>Pick your coffee</h5>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </li>
        <li>
          <h4>02</h4>
          <h5>Choose the frequency</h5>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </li>
        <li>
          <h4>03</h4>
          <h5>Receive and enjoy!</h5>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </li>
      </SC.List>
      <CreatePlanBtn/>
    </SC.MainCon>
  );
};

export default HowItWorks;
