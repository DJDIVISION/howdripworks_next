import styled from "styled-components";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import Image from 'next/image'
import {Link as LinkS} from "react-scroll";
import {TitlePulse} from "../../animations";
import { animateScroll as scroll } from "react-scroll";
import {IconButton} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {Title, Subtitle, Description15, InfoIcon, InfoIconNotif, InfoBox, InfoIconRow, InfoTextRow, Navigation, DArrowDownHolder, DArrowUpHolder, ArrowDown, DArrowUp, ArrowUp} from "./Elements";

import BuddyAddress from "../../images/buddyAddress.jpeg";

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 660px){
        height: 1900px;
    }
`;

const TopWrapper = styled.div`
    width: 100%;
    height: 22.5vh;
    display: flex;
    @media screen and (max-width: 660px){
        width: 100vw;
        height: 275px;
        align-items: center;
        justify-content: center;
    }
`;

const TopColumn = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
    }
    @media screen and (max-width: 660px){
       display: none;
    }
`;

const TopText = styled.div`
    width: 100%;
    height: 22.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        width: 100vw;
        height: 275px;
    }
`;

const Grid = styled.div`
    width: 95%;
    height: 55vh;
    display: flex;
    @media screen and (max-width: 660px){
        height: 1350px;
        flex-direction: column;
        align-items: center;
    }
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        height: 500px;
        width: 100%;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        height: 500px;
        width: 100%;
    }
`;

const Column = styled.div`
    width: 30%;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        height: 350px;
        width: 100%;
    }
    img{
        transform: scale(0.9);
        
    }
`;

const ColumnTitle = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-family: 'Aquino-Demo';
    color: white;
    text-shadow: black -1px 2px,  #008080 -2px 2px,  #008080 -3px 3px,  black -4px 4px;
    @media screen and (max-width: 660px){
        height: 60px;
    }
    span{
        color: aqua;
        margin: 0 5px;
        transform: scale(1.75) translate(0, -2px);
        text-shadow: none;
        @media screen and (max-width: 660px){
        margin: 0 5px;
        }
    }
`;

const AddressBox = styled.div`
    width: 98%;
    height: 7.5vh;
    display: inline-flex;
    align-items: center;
    background: rgba(221, 221, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid black;
    @media screen and (max-width: 660px) {
        height: 60px;
        margin: 10px 0;
    }
`;

const CopyIconHolder = styled.div`
    width: 10%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    @media screen and (max-width: 660px){
        width: 20%;
        height: 100%;
    } 
`;

const CopyIcon = styled(ContentCopyIcon)`
    color: navy;
`;

const Text = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 660px){
        width: 80%;
        }
    h1{
        color: white;
        font-family: "Gruppo";
        font-size: 16px;
        @media screen and (max-width: 660px){
            font-size: 12px;
            line-height: 25px;
        } 
    }
`;

const Hidden = styled.div`
    width: 10%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    @media screen and (max-width: 660px){
        width: 20%;
        height: 100%;
        
    } 
    svg{
        transform: scale(0.8);
        @media screen and (max-width: 660px){
            transform: scale(0.6);
        }
    }
    span{
        font-size: 10px;
        color: white;
        @media screen and (max-width: 660px){
            font-size: 8px;
            font-weight: 100;
        }   
    }
`;

const LeftDescription = styled.div`
    width: 90%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 660px){
        height: 270px;
    } 
    h1{
        color: white;
        font-family: "Gruppo";
        font-size: 22px;
        line-height: 25px;
        text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
        @media screen and (max-width: 660px){
            font-size: 22px;
            line-height: 25px;
        } 
    }
    span {
        font-family: "Aquino-Demo";
        font-size: 22px;
        text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    }
`;

const Item = styled(motion.div)`
    width: 100%;
    height: 7.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    a{
        text-decoration: none;
    }
    @media screen and (max-width: 660px){
        height: 60px;
        width: 200px;
        font-size: 18px;
    } 
    h1 {
        font-size: 20px;
        color: white; 
        text-shadow: black -1px 2px,  #008080 -2px 2px,  #008080 -3px 3px,  black -4px 4px;
    }
    
`; 


const GetStarted = () => {

    const [showInfo, setShowInfo] = useState('false');

    let animateInfo = {};
    if(showInfo === 'true') animateInfo = { x: '2vw', opacity: 1, transition: {duration: 0.3, type: 'tween'}};
    else if(showInfo === 'false') animateInfo = {x: '-30vw', opacity: 0, transition: {duration: 0.3, type: 'tween'}};

    const ShowInfoBox = () => {

        const warning = document.getElementById("infostarted");

        if(showInfo === "false"){
            setShowInfo('true');
            warning.innerHTML = "Need help on how to buy BNB? Click here!"
        } else if(showInfo === 'true'){
            setShowInfo('false');
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const [addressrightcopied, setaddressrightCopied] = useState(false);
    const [addresscopied, setaddressCopied] = useState(false);
    const [faucetcopied, setfaucetCopied] = useState(false);

    const CopyAddress = () => {
        navigator.clipboard.writeText('0x93c0fC3Cb1f57d325a4224C183a5213F13195BAd');
        setaddressCopied(true);
    }

    const CopyAddressRight = () => {
        navigator.clipboard.writeText('0x93c0fC3Cb1f57d325a4224C183a5213F13195BAd');
        setaddressrightCopied(true);
    }

    const CopyFaucet = () => {
        navigator.clipboard.writeText('https://drip.community/faucet');
        setfaucetCopied(true);
    }

    useEffect(() => {
        setTimeout(() => {
            if(addresscopied) setaddressCopied(false)
            if(addressrightcopied) setaddressrightCopied(false)
            if(faucetcopied) setfaucetCopied(false)
        }, 1500)
    }, [addresscopied, addressrightcopied, faucetcopied])

    return(
        <Section id="getstarted">
            <TopWrapper>
                <TopColumn>
                <InfoBox animate={animateInfo}>
                        <InfoIconRow>
                            <InfoIconNotif />
                        </InfoIconRow>
                        <InfoTextRow id="infostarted">
                            
                        </InfoTextRow>
                    </InfoBox>
                </TopColumn>
                <TopText>
                    <Title><span style={{transform: 'translate(-20px, 0) scale(2'}}>·</span> get started <span style={{transform: 'translate(20px, 0) scale(2'}}>·</span></Title>
                    <Subtitle><h1>Before we make our first deposit in the Faucet we need to fill the <span>Buddy</span> address field.</h1></Subtitle>
                </TopText>
                <TopColumn></TopColumn>
            </TopWrapper>
            <Description15><h1>Remember that in order to interact with the Binance smart chain we need some BNB in our wallet to pay the small fee that all transactions cost. <InfoIcon onClick={ShowInfoBox}/></h1></Description15>
            <Grid>
                <ColumnLeft>
                <ColumnTitle><span style={{transform: 'translate(-15px, 0) scale(2)'}}>·</span> google chrome <span style={{transform: 'translate(15px, 0) scale(2)'}}>·</span></ColumnTitle>
                <LeftDescription><h1>Copy the buddy address and press the link below to go to the <span>drip</span> Faucet. Connect your wallet with the header button and scroll down to paste the address. Press Update and sign the transaction on MetaMask to succesfully join our team.</h1></LeftDescription>
                <AddressBox>
                    <CopyIconHolder>
                        <IconButton onClick={CopyAddress}><CopyIcon /></IconButton>
                    </CopyIconHolder>
                    <Text><h1>0x93c0fC3Cb1f57d325a4224C183a5213F13195BAd</h1></Text>
                    <Hidden>
                        {addresscopied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="green"/>
                            <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg><span>Copied!!!</span></>}
                    </Hidden>
                </AddressBox>
                <a href="https://drip.community/faucet" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Item variants={TitlePulse} initial="start" animate="end"><h1>go to faucet</h1></Item> </a>
                </ColumnLeft>
                <Column><Image src={BuddyAddress} alt="buddy" width="240px" height="410px"/></Column>
                <ColumnRight>
                <ColumnTitle><span style={{transform: 'translate(-15px, 0) scale(2)'}}>·</span> smartphone <span style={{transform: 'translate(15px, 0) scale(2)'}}>·</span></ColumnTitle>
                <LeftDescription><h1>Copy the link to the <span>drip</span> Faucet and the buddy address. Open your wallet explorer and paste the Faucet's one. Click on the hamburguer menu and connect your wallet. Scroll down to paste the address, press Update and sign the transaction to succesfully join our team. </h1></LeftDescription>
                <AddressBox>
                    <CopyIconHolder>
                        <IconButton onClick={CopyFaucet}><CopyIcon /></IconButton>
                    </CopyIconHolder>
                    <Text><h1>https://drip.community/faucet</h1></Text>
                    <Hidden>
                        {faucetcopied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="green"/>
                            <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg><span>Copied!!!</span></>}
                    </Hidden>
                </AddressBox>
                <AddressBox style={{transform: 'translate(0, 5px)'}}>
                    <CopyIconHolder>
                        <IconButton onClick={CopyAddressRight}><CopyIcon /></IconButton>
                    </CopyIconHolder>
                    <Text><h1>0x93c0fC3Cb1f57d325a4224C183a5213F13195BAd</h1></Text>
                    <Hidden>
                        {addressrightcopied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="green"/>
                            <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg><span>Copied!!!</span></>}
                    </Hidden>
                </AddressBox>
                </ColumnRight>
            </Grid>
            <Navigation>
                <DArrowDownHolder>
                    <LinkS to="getstarted" smooth={true} duration={750} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </DArrowDownHolder>
                <DArrowUpHolder>
                <LinkS to="setwallet" smooth={true} duration={750} spy={true} exact="true"><IconButton><ArrowUp /></IconButton></LinkS>
                    <IconButton onClick={toggleHome}><DArrowUp /></IconButton>
                </DArrowUpHolder>
            </Navigation>
        </Section>
    )
}

export default GetStarted;