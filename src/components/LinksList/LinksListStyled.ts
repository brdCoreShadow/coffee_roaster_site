import { IPropsStyled } from "@/utils/types";
import styled from "@emotion/styled";

export const ListStyled = styled.ul<IPropsStyled>`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  & > li {
    &:not(:last-of-type) {
      margin-bottom: ${({ location }) =>
        location === "footer" ? "24px" : location === "header" ? "0" : "32px"};

      @media (min-width: 768px) {
        margin-bottom: 0;

        margin-right: 32px;
      }
    }

    & > a {
      text-transform: ${({ location }) => location === "footer" && "uppercase"};

      font-family: ${({ location }) =>
        location === "footer" || (location === "header" && "BarReg")};
      font-size: ${({ location }) =>
        location === "footer" || location === "header" ? "12px" : "24px"};
      font-weight: ${({ location }) =>
        location === "menu" ? "900" : location === "header" ? "700" : "400"};
      line-height: ${({ location }) =>
        location === "footer" || location === "header" ? "1.25px" : "1.33"};

      color: ${({ location }) =>
        location === "footer" || location === "header" ? "#83888F" : "#333D4B"};

      @media (min-width: 1280px) {
        transition: color 0.3s;

        &:hover,
        &:active,
        &:focus {
          cursor: pointer;

          color: ${({ location }) =>
            location === "footer" ? "#fff" : "#333D4B"};
        }

        transition: color 0.3s;
      }
    }
  }
`;
