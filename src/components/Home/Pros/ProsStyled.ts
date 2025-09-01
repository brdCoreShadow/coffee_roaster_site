import styled from "@emotion/styled";

export const MainCon = styled.div`
  position: relative;

  margin-bottom: 700px;

  @media (min-width: 768px){
    margin-bottom: 434px;
  }
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

  @media (min-width: 768px){
    padding-top: 56px;
    padding-bottom: 368px;
    padding-left: 74px;
    padding-right: 74px;
  }

  & > h3 {
    margin-bottom: 24px;

    font-size: 24px;
    font-weight: 900;

    @media (min-width: 768px){
      font-size: 32px;
      line-height: 1.5;
    }
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

  @media (min-width: 768px){
    transform: translate(-50%, 45%);
  }

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

    @media (min-width: 768px){
      width: 573px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      padding-top: 42px;
      padding-bottom: 42px;
      padding-left: 70px;
      padding-right: 48px;

      text-align: left;
    }

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }

    & > div:first-of-type {
      display: inline-block;
      width: 72px;
      height: 72px;

      margin-bottom: 56px;

      @media (min-width: 768px){
        margin-bottom: 0;
        margin-right: 54px;

      }
    }

    &  h5 {
      margin-bottom: 24px;

      font-size: 24px;
      line-height: 1.33;
      font-weight: 900;
    }

    &  p {
      font-size: 15px;
      line-height: 1.67;

      opacity: 0.7;
    }
  }
`;
