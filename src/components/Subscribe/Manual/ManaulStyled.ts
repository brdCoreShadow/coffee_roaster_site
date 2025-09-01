import styled from "@emotion/styled";

export const ManualCon = styled.div`
margin-bottom: 120px;
margin-left: -24px;
margin-right: -24px;

padding-top: 80px;
padding-bottom: 80px;
padding-left: 24px;
padding-right: 24px;

background-color: #2C343E;

border-radius: 10px;

@media (min-width: 768px){
    margin-bottom: 144px;
    margin-left: -40px;
    margin-right: -40px;

    padding-top: 96px;
    padding-bottom: 98px;
    padding-left: 40px;
    padding-right: 40px;
}
`

export const List = styled.ul`

text-align: center;

@media (min-width: 768px){

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    text-align: left;
}

& > li{

    & > h3{
        margin-bottom: 24px;

        font-size: 72px;
        font-weight: 900;

        color:#FDD6BA;

        @media (min-width: 768px){
            margin-bottom: 42px;
        }
    }

    & > h5{
        margin-bottom: 24px;

        font-size: 28px;
        line-height: 1.14;
        font-weight: 900;

        color:#fff;

        @media (min-width: 768px){
            margin-bottom: 38px;
        }
    }

    & > p{
        font-size: 15px;
        line-height: 1.67;

        color:#fff;
    }
}

& > li:not(:last-of-type){
    margin-bottom: 56px;

    @media (min-width: 768px){
        margin-bottom: 0;
        margin-right: 16px;
    }
}
`