import { IPropsStyled } from "@/utils/types";
import styled from "@emotion/styled";

export const ListStyled = styled.ul<IPropsStyled>`

  & > li {
    &:not(:last-of-type) {
      margin-bottom: ${({ location }) =>
        location === "footer" ? "24px" : "32px"};
    }

    & > a {
      text-transform: ${({ location }) => location === "footer" && "uppercase"};

      font-family: ${({ location }) => location === "footer" && "BarReg"};
      font-size: ${({ location }) => (location === "footer" ? "12px" : "24px")};
      font-weight: ${({ location }) => location === "menu" && "900"};
      line-height: ${({ location }) =>
        location === "footer" ? "1.25px" : "1.33"};

      color: ${({ location }) =>
        location === "footer" ? "#83888F" : "#333D4B"};
    }
  }
`;
