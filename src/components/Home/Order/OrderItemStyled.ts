import styled from "@emotion/styled";

export const OrderItemStyled = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 96px;
  }
`;

export const OrderBtn = styled.button`
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

  &::after{
    content: "";
    display: inline-block;
    width: 18px;
    height: 12px;

    position: absolute;

    top: 0;
    right: 0;

    transform: translate(0, 22px);

    background-image: url("data:image/svg+xml;utf8,<svg width='19' height='13' xmlns='http://www.w3.org/2000/svg'><path d='M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z' fill='%230E8784' fill-rule='nonzero'/></svg>");

  }
`;
