import { IPropsStyled } from "@/utils/types";
import styled from "@emotion/styled";

export const LogoCon = styled.div<Partial<IPropsStyled>>`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${({ location }) => (location === "footer" && "48px")};;

  & > h3 {
    font-size: ${({ location }) => (location === "footer" ? "22px" : "16px")};

    color: ${({ location }) => (location === "footer" ? "#fff" : "#333D4B")};
  }
`;

export const LogoIconThumb = styled.div<Partial<IPropsStyled>>`
  display: inline-block;

  width: ${({ location }) => (location === "footer" ? "22px" : "17px")};
  height: ${({ location }) => (location === "footer" ? "22px" : "17px")};

  margin-right: 6px;
`;
