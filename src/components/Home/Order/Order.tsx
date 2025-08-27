import { useFormik } from "formik";
import OrderItem from "./OrderItem";
import * as SC from "./OrderStyled";

import { orderDb } from "@/utils/db";
import { IFormValues } from "@/utils/types";

const Order: React.FC = () => {
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

console.log(formik.values);


  return (
    <SC.OrderCon>
      <ul>
        {orderDb.map((el) => (
          <OrderItem key={el.id} data={el} formik={formik}/>
        ))}
      </ul>
      <div>
        <h3></h3>
    </div>
    <button>Create my plan!</button>
    </SC.OrderCon>
    
  );
};

export default Order;
