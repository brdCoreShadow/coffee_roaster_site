import styled from "@emotion/styled";

export const MainCon = styled.div`
  margin-bottom: 198px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-bottom: 304px;
  }
`;

export const PicThumb = styled.div`
  margin-bottom: 48px;

  border-radius: 10px;

  overflow: hidden;

  @media (min-width: 768px) {
    width: 281px;
    height: 479px;

    margin-bottom: 0;
    margin-right: 68px;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ContentCon = styled.div`
  text-align: center;

  color: #333d4b;

  @media (min-width: 768px) {
    width: 339px;

    text-align: left;
  }

  & > h3 {
    margin-bottom: 30px;

    font-size: 32px;
    font-weight: 900;
    line-height: 1.5;
  }

  & > p {
    font-size: 15px;
    line-height: 1.7;
  }
`;
