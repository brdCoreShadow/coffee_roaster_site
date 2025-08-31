import styled from "@emotion/styled";

export const CollectionCon = styled.div`
  margin-bottom: 120px;

  text-align: center;

  & > h3 {
    margin-bottom: 12px;

    font-size: 32px;
    font-weight: 900;

    background: linear-gradient(rgba(51, 61, 75, 1), rgba(254, 252, 247, 0.5));
    -webkit-background-clip: text; /* for Safari/Chrome */
    -webkit-text-fill-color: transparent;
    background-clip: text; /* for Firefox */
    color: transparent;
  }
`;

export const List = styled.ul`
  & > li {
    &:not(:last-of-type) {
      margin-bottom: 48px;
    }

    & > div {
      display: inline-block;
      width: 200px;
      height: 151px;

      margin-bottom: 24px;
    }

    & > h5 {
      margin-bottom: 16px;

      font-size: 24px;
      line-height: 1.33;
      font-weight: 900;

      color: #333d4b;
    }

    & > p {
      font-size: 15px;
      line-height: 1.67;

      color: #333D4B;

      opacity: 0.7;
    }
  }
`;
