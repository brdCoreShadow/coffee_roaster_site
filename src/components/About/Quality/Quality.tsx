import * as SC from "./QualityStyled"

import qualityPicMob from "../../../assets/images/about/mobile/image-quality.jpg"
import qualityPicTab from "../../../assets/images/about/tablet/image-quality.jpg"
import { useScreenSize } from "@/hooks/useScreenSize";

const Quality:React.FC = () => {

const {isTablet} = useScreenSize()

  return (
    <SC.MainCon>
      <SC.PicThumb>
        <img src={isTablet ? qualityPicTab : qualityPicMob} alt="quality" />
      </SC.PicThumb>
      <SC.ContentCon>
        <h3> Uncompromising quality</h3>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </SC.ContentCon>
    </SC.MainCon>
  );
};

export default Quality;
