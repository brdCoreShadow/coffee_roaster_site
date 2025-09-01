import { IOrderItemStyled } from "@/utils/types";
import styled from "@emotion/styled";

export const OrderItemStyled = styled.li`
  text-align: left;

  &:not(:last-of-type) {
    margin-bottom: 96px;

    @media (min-width: 768px) {
      margin-bottom: 100px;
    }
  }
`;

export const OrderBtn = styled.button<Partial<IOrderItemStyled>>`
  position: relative;

  width: 100%;

  margin-bottom: 32px;

  padding-right: 88px;

  text-align: left;

  background-color: transparent;

  & > span {
    font-size: 24px;
    line-height: 1.17;
    font-weight: 900;

    color: #83888f;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 18px;
    height: 12px;

    position: absolute;

    top: 0;
    right: 0;

    transform: ${({ isOrderMenu }) =>
      isOrderMenu
        ? "translate(0, 22px) rotate(0deg)"
        : "translate(0, 22px) rotate(180deg)"};

    background-image: url("data:image/svg+xml;utf8,<svg width='19' height='13' xmlns='http://www.w3.org/2000/svg'><path d='M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z' fill='%230E8784' fill-rule='nonzero'/></svg>");
  }
`;

export const List = styled.ul<Partial<IOrderItemStyled>>`
  display: ${({ isOrderMenu }) => (isOrderMenu ? "block" : "none")};

  @media (min-width: 768px) {
    display: ${({ isOrderMenu }) => (isOrderMenu ? "flex" : "none")};
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const SubItem = styled.li<Partial<IOrderItemStyled>>`
  position: relative;

  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ isChecked }) => (isChecked ? "#0E8784" : "#f4f1eb")};

  border-radius: 8px;

@media (min-width: 768px){
  padding-top: 32px;
  padding-bottom: 84px;
  padding-left: 26px;
  padding-right: 26px;
}

  & > h5 {
    margin-bottom: 8px;

    font-size: 24px;
    line-height: 1.33;
    font-weight: 900;

    color: ${({ isChecked }) => (isChecked ? "#fff" : "#333D4B")};

    @media (min-width: 768px){
      margin-bottom: 24px;
    }
  }

  & > p {
    font-size: 16px;
    line-height: 1.63;

    color: ${({ isChecked }) => (isChecked ? "#fff" : "#333D4B")};
    opacity: 0.7;
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;

    @media (min-width: 768px){
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
`;

export const Input = styled.input`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0;
`;
