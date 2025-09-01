import styled from "@emotion/styled";

export const MainCon = styled.div`
  margin-bottom: 120px;

  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 144px;

    text-align: left;
  }

  & > h3 {
    margin-bottom: 80px;

    font-size: 24px;
    line-height: 1.33;
    font-weight: 900;

    color: #83888f;

    @media (min-width: 768px){
      margin-bottom: 40px;
    }
  }
`;

export const List = styled.ul`
  margin-bottom: 80px;

  @media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  & > li {



    &:not(:last-of-type) {
      margin-bottom: 56px;

      @media (min-width: 768px){
        margin-bottom: 0;
        margin-right: 24px;
      }
    }

    & > h4 {
      margin-bottom: 24px;

      font-size: 72px;
      font-weight: 900;

      color: #fdd6ba;

      @media (min-width: 768px){
        margin-bottom: 42px;
      }
    }

    & > h5 {
      margin-bottom: 24px;

      font-size: 28px;
      line-height: 1.14;
      font-weight: 900;

      color: #333d4b;

      @media (min-width: 768px){
        margin-bottom: 38px;
      }
    }

    & > p {
      font-size: 15px;
      line-height: 1.67;

      color: #333d4b;
    }
  }
`;
