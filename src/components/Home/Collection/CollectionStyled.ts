import styled from "@emotion/styled";

export const CollectionCon = styled.div`
  margin-bottom: 120px;

  text-align: center;

  @media (min-width: 768px) {
    position: relative;

    margin-bottom: 144px;
  }

  & > h3 {
    margin-bottom: 12px;

    font-size: 32px;
    font-weight: 900;

    background: linear-gradient(
      rgba(51, 61, 75, 0.7),
      rgba(254, 252, 247, 0.3)
    );
    -webkit-background-clip: text; /* for Safari/Chrome */
    -webkit-text-fill-color: transparent;
    background-clip: text; /* for Firefox */
    color: transparent;

    @media (min-width: 768px) {
      position: absolute;

      top: 0;
      left: 0%;
      z-index: -1;

      transform: translate(0%, -60%);

      font-size: 112px;
    }
  }
`;

export const List = styled.ul`
  & > li {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      text-align: left;
    }

    &:not(:last-of-type) {
      margin-bottom: 48px;

      @media (min-width: 768px) {
        margin-bottom: 32px;
      }
    }

    & > div:first-of-type {
      display: inline-block;
      width: 200px;
      height: 151px;

      margin-bottom: 24px;

      @media (min-width: 768px){
        width: 255px;
        height: 193px;
      }
    }

    & > div:last-of-type {
      @media (min-width: 768px) {
        display: inline-block;

        width: 282px;
      }
    }

    & h5 {
      margin-bottom: 16px;

      font-size: 24px;
      line-height: 1.33;
      font-weight: 900;

      color: #333d4b;
    }

    & p {
      font-size: 15px;
      line-height: 1.67;

      color: #333d4b;

      opacity: 0.7;
    }
  }
`;

export const FlexCon = styled.div``;
