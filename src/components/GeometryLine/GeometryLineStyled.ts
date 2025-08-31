import styled from "@emotion/styled";

export const Line = styled.div`

  display: inline-block;

  width: 467px;
  height: 2px;

  margin-bottom: 48px;

  background-color: #fdd6ba;
`;

export const CircleList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  & > li {
    position: relative;

 transform: translate(0, -50%);

    z-index: 5;

    display: inline-block;

    width: 31px;
    height: 31px;

    background-color: #FEFCF7;

    border: 1px solid #0e8784;

    border-radius: 50%;
  }
`;
