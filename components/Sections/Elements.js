import styled from "styled-components";
import {motion} from "framer-motion";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export const Title = styled.div`
    width: 100%;
    height: 12.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Aquino-Demo';
    color: white;
    font-size: 38px;
    line-height: 50px;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        color: aqua;
        margin: 0 10px;
        transform: scale(2) translate(0, -2px);
        text-shadow: none;
        @media screen and (max-width: 660px){
        margin: 0 5px;
        }
    }
    @media screen and (max-width: 660px){
        font-size: 32px;
        width: 90%;
        line-height: 40px;
        height: 125px;
    }
`;

export const Subtitle = styled.div`
    width: 90%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: navy -1px 2px, black -2px 2px, black -3px 3px;
    text-align: center;
    h1{
        font-size: 26px;
        font-family: "Gruppo";
        color: white;
    }
    span{
        color: aqua;
        margin: 0 8px;
    }
    @media screen and (max-width: 660px){
        font-size: 24px;
        width: 90%;
        line-height: 30px;
        height: 150px;
    }
`;

export const Description10 = styled.div`
    width: 80%;
    height: 12.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 660px){
        height: 175px;
        width: 95%;
    }
    h1{
        font-size: 26px;
        color: white;
        font-family: "Gruppo";
        line-height: 30px;
        text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
        @media screen and (max-width: 660px){
            font-size: 22px;
        }
    }
    span {
        font-family: "Aquino-Demo";
        font-size: 22px;
        font-weight: 100;
        text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    }
    strong {
        color: aqua;
    }
    
`;


export const Description15 = styled.div`
width: 80%;
height: 15vh;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
@media screen and (max-width: 660px){
    height: 250px;
    width: 95%;
}
h1{
    font-size: 26px;
    color: white;
    font-family: "Gruppo";
    line-height: 30px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    width: 90%;
    @media screen and (max-width: 660px){
        width: 95%;
        font-size: 22px;
    }
}
span {
    font-family: "Aquino-Demo";
    font-size: 22px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    font-weight: 100;
}
strong {
    color: aqua;
}
`;

export const Description20 = styled.div`
    width: 80%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 660px){
        height: 300px;
        width: 95%;
    }
    h1{
        font-size: 26px;
        color: white;
        font-family: "Gruppo";
        line-height: 30px;
        text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
        @media screen and (max-width: 660px){
            font-size: 22px;
        }
    }
    span {
        font-family: "Aquino-Demo";
        font-size: 22px;
        text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
        font-weight: 100;
    }
    strong {
        color: aqua;
    }
    p{
        line-height: 0;
    }
`;

export const InfoIcon = styled(HelpOutlineIcon)`
color: yellow;
transform: translate(10px, 5px);
cursor: pointer;
`;

export const InfoIconSmart = styled(HelpOutlineIcon)`
color: yellow;
cursor: pointer;
`;

export const InfoIconNotif = styled(HelpOutlineIcon)`
color: yellow;
`;

export const InfoBox = styled(motion.div)`
width: 250px;
height: 100px;
border: 1px solid aqua;
display: flex;
flex-direction: column;
align-items: center;
background: rgba(221, 221, 255, 0.1);
backdrop-filter: blur(10px);
border-radius: 10px;
`;

export const InfoIconRow = styled.div`
width: 30px;
height: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transform: translate(0, 10px);
`;

export const InfoTextRow = styled.div`
width: 80%;
height: 80px;
color: yellow;
font-size: 18px;
font-weight: bold;
font-family: "Gruppo";
display: flex;
text-align: center;
align-items: center;
justify-content: center;
`;

export const Navigation = styled.div`
width: 100%;
height: 7.5vh;
display: flex;
align-items: center;
@media screen and (max-width: 660px){
    height: 50px;
    width: 80%;
}
`;

export const DArrowDownHolder = styled.div`
color: aqua;
width: 90%;
height: 100%;
display: flex;
align-items: center;
padding-left: 40px;
@media screen and (max-width: 660px){
    padding-left: 0px;
}
`;

export const DArrowUpHolder = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 660px){
        width: 40px
    }
`;

export const DArrowUp = styled(KeyboardDoubleArrowUpIcon)`
    color: aqua;
    @media screen and (max-width: 660px){
        
    }
`;

export const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: aqua;
`;

export const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: aqua;
`;

export const Lightbox = styled.div`
    width: 100vw;
    height: 1300px;
    top: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    z-index: 500;
    display: none;
    
`;
