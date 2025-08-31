import { ISummary } from "@/utils/types";
import * as SC from "./SummaryStyled";
import { useEffect } from "react";

const Summary: React.FC<ISummary> = ({ closeSummary, resetOrder, isSummary }) => {
  const handleSummary = () => {
    resetOrder();
    closeSummary();
  };


 useEffect(() => {
    if (isSummary) {
      // lock background scroll
      document.body.style.overflow = "hidden";
      // jump to top
      window.scrollTo({ top: 0, behavior: "instant" }); 
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isSummary]);

  if (!isSummary) return null;

  return (
    <>
    <SC.Wrapper></SC.Wrapper>
      <SC.MainCon>
        <SC.TitleCon>
          <h3>Order Summary</h3>
        </SC.TitleCon>
        <SC.ContentCon>
          <h5>
            “I drink my coffee as <span>Filter</span>, with a <span>Decaf</span>{" "}
            type of bean. <span>250g</span> ground ala <span>Cafetiére</span>,
            sent to me <span>Every Week</span>.”
          </h5>
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
        </SC.ContentCon>
        <SC.SummaryButton type="button" onClick={handleSummary}>
          Checkout - $14.00 / mo
        </SC.SummaryButton>
      </SC.MainCon>
    </>
  );
};

export default Summary;
