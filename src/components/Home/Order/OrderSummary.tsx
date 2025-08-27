import * as SC from "./OrderSummaryStyled"

const OrderSummary:React.FC = () => {
  return (
    <SC.OrderSummaryCon>
      <p>order summary</p>
      <h5>
        “I drink my coffee as <span>Filter</span>, with a <span>Decaf</span>type
        of bean. <span>250g</span> ground ala <span>Cafetiére</span> , sent to
        me <span>Every Week</span>.”
      </h5>
    </SC.OrderSummaryCon>
  );
};

export default OrderSummary;
