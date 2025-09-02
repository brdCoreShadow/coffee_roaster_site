import styled from "@emotion/styled";

export const MainCon = styled.div`
  position: relative;

  margin-bottom: 120px;

  padding-top: 142px;
  padding-bottom: 62px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-color: #2c343e;

  border-radius: 10px;

  @media (min-width: 768px) {
    padding-top: 224px;
    padding-bottom: 68px;
    padding-left: 74px;
    padding-right: 74px;
  }

  @media (min-width: 1280px) {
    padding-top: 88px;
    padding-bottom: 176px;
    padding-left: 86px;
    padding-right: 655px;

    text-align: left;
  }
`;

export const PicThumb = styled.div`
  position: absolute;

  top: -23%;
  left: 50%;

  transform: translate(-50%, 23%);

  width: 279px;
  height: 156px;

  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 768px) {
    top: 0%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 573px;
    height: 320px;
  }

  @media (min-width: 1280px){
    width: 445px;
    height: 474px;

    transform: translate(0%, -30%);

  }
`;

export const ContentCon = styled.div`
  color: #fefcf7;

  & > h3 {
    margin-bottom: 24px;

    font-size: 28px;
    font-weight: 900;

    @media (min-width: 768px) {
      font-size: 32px;
      line-height: 1.5;
    }

    @media (min-width: 1280px){
        margin-bottom: 32px;

        font-size: 40px;
        line-height: 1.2;
    }
  }

  & > p {
    font-size: 15px;
    line-height: 1.67;

    opacity: 0.7;

    @media (min-width: 1280px){
        font-size: 16px;
    }
  }
`;
