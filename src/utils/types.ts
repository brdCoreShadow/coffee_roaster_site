export interface IChildProps {
  children: React.ReactNode;
}

export interface ISubOrderItem {
    option:string;
    description:string;
}
export interface IOrderItem {
  id: number;
  title: string;
  options:ISubOrderItem[];
}

export interface IOrderItemProps {
  data: IOrderItem;
}