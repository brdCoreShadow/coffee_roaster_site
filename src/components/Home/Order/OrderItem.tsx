import { IOrderItemProps } from "@/utils/types";
import * as SC from "./OrderItemStyled";
import { useToggleOrder } from "@/hooks/useToggleOrder";

const OrderItem: React.FC<IOrderItemProps> = ({ data, formik }) => {
  const { title, options, field } = data;

  const { isOrderMenu, toggleOrderMenu } = useToggleOrder();

  return (
    <SC.OrderItemStyled>
      <SC.OrderBtn
        type="button"
        onClick={toggleOrderMenu}
        isOrderMenu={isOrderMenu}
      >
        <span>{title}</span>
      </SC.OrderBtn>
      <SC.List isOrderMenu={isOrderMenu}>
        {options.map(({ option, description }) => {
          return (
            <SC.SubItem
              key={option}
              isChecked={formik.values[field] === option}
            >
              <h5>{option}</h5>
              <p>{description}</p>
              <SC.Input
                type="radio"
                name={field}
                value={option}
                onChange={formik.handleChange}
                checked={formik.values[field] === option}
              />
            </SC.SubItem>
          );
        })}
      </SC.List>
    </SC.OrderItemStyled>
  );
};

export default OrderItem;
