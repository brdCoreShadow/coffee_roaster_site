import styled from "@emotion/styled";

export const OrderSummaryCon = styled.div`
  margin-bottom: 56px;

  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: left;

  background-color: #2c343e;

  border-radius: 12px;

  & > p {
    margin-bottom: 8px;

    text-transform: uppercase;

    font-size: 16px;
    line-height: 1.63;

    color: #fff;

    opacity: 0.5;
  }

  & > h5 {
    font-size: 24px;
    line-height: 1.67;
    font-weight: 900;

    color: #fff;

    & > span {
      color: #0e8784;
    }
  }
`;
