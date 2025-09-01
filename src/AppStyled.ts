import styled from "@emotion/styled";

export const AppStyled = styled.div`
  min-width: 325px;

  @media (min-width: 1280px) {
    max-width: 1280px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterFlexCon = styled.div`
  margin-bottom: 48px;

  @media (min-width: 768px){
    text-align: center;
  }

  @media (min-width: 1280px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 0;
  }
`;
