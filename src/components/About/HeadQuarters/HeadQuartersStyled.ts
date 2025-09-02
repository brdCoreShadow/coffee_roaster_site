import styled from "@emotion/styled";

export const MainCon = styled.div`
  text-align: center;

@media (min-width: 1280px){
    text-align: left;
}

  & > h3 {
    margin-bottom: 72px;

    font-size: 24px;
    font-weight: 900;
    line-height: 1.33;

    color: #83888f;
  }
`;

export const List = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  & > li {
    color: #333d4b;

    @media (min-width: 768px) {
      text-align: left;
    }

    &:not(:last-of-type) {
      margin-bottom: 80px;

      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 42px;
      }

      @media (min-width: 1280px){
        margin-right: 196px;
      }
    }

    & > div {
      display: inline-block;

      margin-bottom: 46px;
    }

    & > h4 {
      margin-bottom: 22px;

      font-size: 28px;
      font-weight: 900;
      line-height: 1.29;

      @media (min-width: 768px){
        font-size: 24px;
        line-height: 1.5;
      }
    }

    & > p {
      font-size: 16px;
      line-height: 1.63;
    }
  }
`;
