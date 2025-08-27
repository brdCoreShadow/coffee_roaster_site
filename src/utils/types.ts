import { FormikProps } from "formik";

export interface IChildProps {
  children: React.ReactNode;
}

export interface ISubOrderItem {
  option: string;
  description: string;
}
export interface IOrderItem {
  id: number;
  title: string;
  field: keyof IFormValues;
  options: ISubOrderItem[];
}

export interface IFormValues {
  drinkingType: string;
  coffeeType: string;
  quantity: string;
  grind: string;
  delivery: string;
}

export interface IOrderItemProps {
  data: IOrderItem;
  formik: FormikProps<IFormValues>
}

export interface IOrderItemStyled{
   isOrderMenu:boolean;
   isChecked:boolean; 
}