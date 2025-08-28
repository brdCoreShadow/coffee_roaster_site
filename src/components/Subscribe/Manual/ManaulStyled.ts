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
`

export const List = styled.ul`

text-align: center;

& > li{

    & > h3{
        margin-bottom: 24px;

        font-size: 72px;
        font-weight: 900;

        color:#FDD6BA;
    }

    & > h5{
        margin-bottom: 24px;

        font-size: 28px;
        line-height: 1.14;
        font-weight: 900;

        color:#fff
    }

    & > p{
        font-size: 15px;
        line-height: 1.67;

        color:#fff;
    }
}

& > li:not(:last-of-type){
    margin-bottom: 56px;
}
`