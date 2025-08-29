import styled from "@emotion/styled";

export const MainCon = styled.div`
  position: relative;

  margin-bottom: 700px;
`;

export const ProsCon = styled.div`
  padding-top: 64px;
  padding-bottom: 662px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-color: #2c343e;

  color: #fefcf7;

  border-radius: 10px;

  & > h3 {
    margin-bottom: 24px;

    font-size: 24px;
    font-weight: 900;
  }

  & > p {
    font-size: 15px;
    line-height: 1.67;
  }
`;

export const ProsList = styled.ul`
  position: absolute;

  top: 0;
  left: 50%;

  transform: translate(-50%, 25%);

  & > li {
    width: 279px;

    padding-top: 72px;
    padding-bottom: 50px;
    padding-left: 12px;
    padding-right: 12px;

    text-align: center;

    color: #fefcf7;

    background-color: #0e8784;

    border-radius: 8px;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }

    & > div {
      display: inline-block;
      width: 72px;
      height: 72px;

      margin-bottom: 56px;
    }

    & > h5 {
      margin-bottom: 24px;

      font-size: 24px;
      line-height: 1.33;
      font-weight: 900;
    }

    & > p {
      font-size: 15px;
      line-height: 1.67;

      opacity: 0.7;
    }
  }
`;
