import styled from 'styled-components';

const LeftEdge = '30%';


export const MainBoard = styled.div`
overflow:scroll;
`

export const HalfLeft = styled(MainBoard)`
position:fixed;
width:${LeftEdge};
height:100%;
`

export const HalfRight = styled(MainBoard)`
width:70%;
margin-left:${LeftEdge};
`

export const ImgControl = styled.img`
margin-top:50px;
margin-right:15%;
margin-bottom:50px;
margin-left:15%;
width:70%;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0,0,0,1.00);
overflow:hidden;
transform:scale(1,1);
transition: all 0.5s ease-out;
&:hover {
    transform:scale(1.1,1.1);
  }
`
