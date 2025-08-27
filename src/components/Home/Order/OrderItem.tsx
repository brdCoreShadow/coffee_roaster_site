import { IOrderItemProps } from "@/utils/types";
import * as SC from "./OrderItemStyled";

const OrderItem: React.FC<IOrderItemProps> = ({ data }) => {
  const { title, options } = data;

  return (
    <SC.OrderItemStyled>
      <SC.OrderBtn>
        <span>{title}</span>
      </SC.OrderBtn>
      <ul>
        {options.map(({ option, description }) => {
          return (
            <li>
              <h5>{option}</h5>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </SC.OrderItemStyled>
  );
};

export default OrderItem;
