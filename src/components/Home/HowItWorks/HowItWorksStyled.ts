import styled from "@emotion/styled";

export const MainCon = styled.div`
  margin-bottom: 120px;

  text-align: center;

  & > h3 {
    margin-bottom: 80px;

    font-size: 24px;
    line-height: 1.33;
    font-weight: 900;

    color: #83888f;
  }
`;

export const List = styled.ul`
  margin-bottom: 80px;

  & > li {
    &:not(:last-of-type) {
      margin-bottom: 56px;
    }

    & > h4 {
      margin-bottom: 24px;

      font-size: 72px;
      font-weight: 900;

      color: #fdd6ba;
    }

    & > h5{
        margin-bottom: 24px;

        font-size: 28px;
        line-height: 1.14;
        font-weight: 900;

        color: #333D4B;
    }

    & > p{
        font-size: 15px;
        line-height: 1.67;

        color: #333D4B;
    }
  }
`;
