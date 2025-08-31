import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > li {
    &:not(:last-of-type) {
      margin-right: 24px;
    }

    &:hover,
    &:active,
    &:focus {
      cursor: pointer;
    }
  }
`;
