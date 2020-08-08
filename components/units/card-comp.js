import styled from 'styled-components';

export const BackgroundScreen = styled.div`
background : #000;
top : 0;
left : 0;
right : 0;
bottom : 0;
opacity : .6;
position : fixed; 
z-index: 1;
`

export const Test = styled.div`

`

export const LoginCard = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
width: 30%;
top: 25%;
left: 35%;
position: fixed;
opacity:.9;  //透明度
border-radius:8px;  // 邊框陰影
text-align: center;
z-index: 100;
background-color: #FFE6FF;
`


export const LoginCardHover = styled.div`
${LoginCard}:hover & {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

export const LoginContext = styled.div`
text-align: left;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    .col-12 input{
        width:100%;
    }
`

export const LoginTail = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`
