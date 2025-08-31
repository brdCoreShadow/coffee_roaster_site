import { useFormik } from "formik";
import OrderItem from "./OrderItem";
import * as SC from "./OrderStyled";

import { orderDb } from "@/utils/db";
import { IFormValues, ISubscribePageProps } from "@/utils/types";
import OrderSummary from "./OrderSummary";

const Order: React.FC<ISubscribePageProps> = ({ orderSubmit, openSummary }) => {
  const formik = useFormik<IFormValues>({
    initialValues: {
      drinkingType: "Capsule",
      coffeeType: "Single Origin",
      quantity: "250g",
      grind: "Wholebean",
      delivery: "Every week",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    orderSubmit(formik.values);
    openSummary();
  };

  return (
    <SC.OrderCon onSubmit={handleSubmit}>
      <SC.List>
        {orderDb.map((el) => (
          <OrderItem key={el.id} data={el} formik={formik} />
        ))}
      </SC.List>
      <OrderSummary order={formik.values} />
      <SC.SubmitBtn type="submit">Create my plan!</SC.SubmitBtn>
    </SC.OrderCon>
  );
};

export default Order;
