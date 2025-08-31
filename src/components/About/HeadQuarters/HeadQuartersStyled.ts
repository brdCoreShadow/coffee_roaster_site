import styled from "@emotion/styled";

export const MainCon = styled.div`
  text-align: center;

  & > h3 {
    margin-bottom: 72px;

    font-size: 24px;
    font-weight: 900;
    line-height: 1.33;

    color: #83888f;
  }
`;

export const List = styled.ul`
  & > li {
    color: #333d4b;

    &:not(:last-of-type) {
      margin-bottom: 80px;
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
    }

    & > p {
      font-size: 16px;
      line-height: 1.63;
    }
  }
`;
