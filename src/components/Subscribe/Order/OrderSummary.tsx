import { OrderSummaryProps } from "@/utils/types";
import * as SC from "./OrderSummaryStyled"

const OrderSummary:React.FC<OrderSummaryProps> = ({order}) => {
  
  const {drinkingType, coffeeType, quantity, grind, delivery} = order;
  
  return (
    <SC.OrderSummaryCon>
      <p>order summary</p>
      <h5>
        “I drink my coffee as <span>{drinkingType}</span>, with a <span>{coffeeType}</span> type
        of bean. <span>{quantity}</span> ground ala <span>{grind}</span> , sent to
        me <span>{delivery}</span>.”
      </h5>
    </SC.OrderSummaryCon>
  );
};

export default OrderSummary;
