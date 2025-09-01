
import * as SC from "./HeroStyled";

import CreatePlanBtn from "@/components/CreatePlanBtn/CreataPlanBtn";


const Hero: React.FC = () => {
  return (
    
    <SC.HeroCon>
      <h3>Great coffee made simple.</h3>
      <p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
     <CreatePlanBtn />
    </SC.HeroCon>
   
  );
};

export default Hero;
