import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 32px;
padding-bottom: 40px;
padding-left: 24px;
padding-right: 24px;

@media (min-width: 768px){
    padding-top: 40px;
    padding-bottom: 52px;
    padding-left: 40px;
    padding-right: 40px;
}

@media (min-width: 1280px){
    padding-top: 44px;
    padding-bottom: 44px;
    padding-left: 80px;
    padding-right: 80px;
}
`