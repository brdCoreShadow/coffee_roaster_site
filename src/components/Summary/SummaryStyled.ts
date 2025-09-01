import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: #000;

  opacity: 0.7;

  @media (min-width: 768px){
    height: 100%;

  }
`;

export const MainCon = styled.div`
  position: absolute;

  top: 0;
  left: 0;

transform: translate(24px, 36px);

  width: 327px;

  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fefcf7;

  border-radius: 10px;

  overflow: hidden;

@media (min-width: 768px){
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 540px;
}
`;

export const TitleCon = styled.div`
  margin-left: -24px;
  margin-right: -24px;

  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 24px;

  color: #fff;
  background-color: #333d4b;

  & > h3 {
    font-size: 28px;
    font-weight: 900;
    line-height: 1.14;
  }
`;

export const ContentCon = styled.div`
  margin-bottom: 24px;

  padding-top: 40px;

  & > h5 {
    font-size: 24px;
    font-weight: 900;
    line-height: 1.67;

    color: #83888f;
  }

  & span {
    color: #0e8784;
  }

  & > p {
    font-size: 15px;
    line-height: 1.67;
  }
`;

export const SummaryButton = styled.button`
  width: 279px;

  padding-top: 16px;
  padding-bottom: 16px;

  text-align: center;

  font-size: 18px;
  font-weight: 900;
  line-height: 1.39;

  color: #fefcf7;

  background-color: #0e8784;

  border-radius: 6px;
`;
