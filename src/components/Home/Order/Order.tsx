import OrderItem from "./OrderItem";
import * as SC from "./OrderStyled";

import { orderDb } from "@/utils/db";

const Order: React.FC = () => {
  return (
    <SC.OrderCon>
      <ul>
       {orderDb.map(el => <OrderItem key={el.id} data={el}/>)}
      </ul>
    </SC.OrderCon>
  );
};

export default Order;
