import {useState, useEffect} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Image from 'next/image'
import Metamask from "../../svg/metamask_letters.svg";
import Trust from "../../svg/trust_letters.svg";
import Google from "../../images/googlePlay.png";
import Store from "../../images/appStore.png";
import Chrome from "../../images/Chrome.png";
import Apk from "../../images/Apk.png";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {IconButton} from "@mui/material";
import {Title, Subtitle, InfoIcon, InfoIconSmart, InfoIconNotif, InfoBox, InfoIconRow, InfoTextRow, Navigation, DArrowDownHolder, DArrowUpHolder, ArrowUp, ArrowDown, Lightbox} from "./Elements";

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    position: relative;
    @media screen and (max-width: 660px){
        max-width: 100vw;
        height: 1310px;
    }
`;

const TopWrapper = styled.div`
    width: 100%;
    height: 22.5vh;
    display: flex;
    @media screen and (max-width: 660px){
        width: 100vw;
        height: 300px;
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
        height: 300px;
    }
`;


const Grid = styled.div`
    width: 90%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 660px){
        width: 100%;
        height: 1300px;
    }
`;


const GridTitle = styled.div`
    width: 80%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: navy -1px 2px, black -2px 2px, black -3px 3px;
    text-align: center;
    h1{
        font-size: 26px;
        font-family: "Gruppo";
        color: white;
        transform: translate(0, -20px);
    }
    span{
        color: aqua;
        margin: 0 8px;
    }
    @media screen and (max-width: 660px){
        font-size: 24px;
        width: 90%;
        line-height: 30px;
        height: 100px;
    }
`;

const GridTitleBottom = styled.div`
    width: 80%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: navy -1px 2px, black -2px 2px, black -3px 3px;
    text-align: center;
    h1{
        font-size: 26px;
        font-family: "Gruppo";
        color: white;
        transform: translate(0, -20px);
    }
    span{
        color: aqua;
        margin: 0 8px;
    }
    @media screen and (max-width: 660px){
        font-size: 24px;
        width: 90%;
        line-height: 30px;
        height: 75px;
    }
`;

const GridBottomTitle = styled.div`
    width: 80%;
    height: 5vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: navy -1px 2px, black -2px 2px, black -3px 3px;
    text-align: center;
    h1{
        font-size: 26px;
        font-family: "Gruppo";
        color: white;
        //transform: translate(0, 10px);
    }
    span{
        color: aqua;
        margin: 0 8px;
    }
    @media screen and (max-width: 660px){
        display: none;
    }
`;

const GridBottomTitleSmart = styled.div`
    font-size: 24px;
    width: 90%;
    line-height: 30px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: navy -1px 2px, black -2px 2px, black -3px 3px;
    text-align: center;
    h1{
        font-size: 26px;
        font-family: "Gruppo";
        color: white;
        //transform: translate(0, 10px);
    }
    span{
        color: aqua;
        margin: 0 8px;
    }
    @media screen and (min-width: 660px){
        display: none;
    }
`;

const GridBottomTitleTwo = styled.div`
    width: 85%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: navy -1px 2px, black -2px 2px, black -3px 3px;
    text-align: center;
    h1{
        font-size: 26px;
        font-family: "Gruppo";
        color: white;
        //transform: translate(0, 10px);
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

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 32.5vh;
    @media screen and (max-width: 660px){
        height: 350px;
        width: 100vw;
        flex-direction: column;
        justify-content: center;
    }
`;

const ColumnLeft = styled.div`
    width: 48%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(221, 221, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid black;
    @media screen and (max-width: 660px){
        height: 150px;
        width: 95vw;
        margin: 10px 0px;
    }
`;

const ColumnRight = styled.div`
    width: 48%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(221, 221, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid black;
    @media screen and (max-width: 660px){
        height: 150px;
        width: 95vw;
        margin: 10px 0px;
    }
`;

const IconRow = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        height: 75px;
    }
    img{
        width: 40%;
        display: block;
        object-fit: cover;
        @media screen and (max-width: 660px){
            transform: scale(0.8) translate(0, 10px);
        }
    }
`;

const IconsRow = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 660px){
        height: 75px;
    }
`;

const Icon = styled.a`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 60%;
        display: block;
        object-fit: cover;
        @media screen and (max-width: 660px){
            width: 70%;
        }   
    }
`;

const IconWeb = styled.a`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 60%;
        display: block;
        object-fit: cover;
        background: black;
        border-radius: 5px;
    }
`;

const BSCColumn = styled.div`
    width: 65%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(221, 221, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid black;
    transform: translate(0, 30px);
    @media screen and (max-width: 660px){
        width: 95%;
        height: 350px;
        transform: translate(0, 0px);
    } 
    
`;

const BoxRow = styled.div`
    width: 90%;
    height: 33%;
    display: inline-flex;
    @media screen and (max-width: 660px){
        width: 100%;
        height: 140px;
        display: flex;
        flex-direction: column;
    } 
`;

const BoxMiniRow = styled.div`
    width: 50%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    h1{
        color: white;
        font-family: "Gruppo";
        font-size: 20px;
    }
    @media screen and (max-width: 660px){
        width: 100%;
        height: 70px;
    } 
`;

const BoxMaxiRow = styled.div`
    width: 70%;
    height: 33%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 660px){
        width: 100%;
        height: 80px;
        font-size: 16px;
    } 
`;

const Text = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 660px){
        width: 90%;
        }
    h1{
        color: white;
        font-family: "Gruppo";
        font-size: 18px;
        @media screen and (max-width: 660px){
            font-size: 16px;
            line-height: 25px;
        } 
    }
`;

const CopyTopIconHolder = styled.div`
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

const CopyIconHolder = styled.div`
    width: 15%;
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

const TopHidden = styled.div`
    width: 15%;
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
        transform: scale(0.9);
    }
    span{
        font-size: 12px;
        color: white;
        @media screen and (max-width: 660px){
            font-size: 10px;
        }
        
    }
`;

const Hidden = styled.div`
    width: 20%;
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
        transform: scale(0.9);
    }
    span{
        font-size: 12px;
        color: white;
        @media screen and (max-width: 660px){
            font-size: 10px;
        }   
    }
`;







const SetWallet = () => {

    const [showInfo, setShowInfo] = useState('false');
    const [showInfoSmart, setShowInfoSmart] = useState('false');
    

    let animateInfo = {};
    if(showInfo === 'true') animateInfo = { x: '2vw', opacity: 1, transition: {duration: 0.3, type: 'tween'}};
    else if(showInfo === 'false') animateInfo = {x: '-30vw', opacity: 0, transition: {duration: 0.3, type: 'tween'}};

    const ShowInfoBox = () => {

        if (typeof window !== "undefined") {
            const warning = document.getElementById("infosetwallet");

            if(showInfo === "false"){
                setShowInfo('true');
                warning.innerHTML = "Need help creating a wallet address? Click here!"
            } else if(showInfo === 'true'){
                setShowInfo('false');
            }
        }

        
    }

    let animateInfoSmart = {};
    if(showInfoSmart === 'true') animateInfoSmart = { x: '2vw', opacity: 1, transition: {duration: 0.3, type: 'tween'}};
    else if(showInfoSmart === 'false') animateInfoSmart = {x: '-30vw', opacity: 0, transition: {duration: 0.3, type: 'tween'}};

    const ShowInfoBoxSmart = () => {

        if (typeof window !== "undefined") {
            const lightbox = document.getElementById("lightbox");
            lightbox.classList.add("active");

    
            setTimeout(() => {
                lightbox.classList.remove("active");
            }, 3000)
        }

        
        
        
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const [addresscopied, setaddressCopied] = useState(false);
    const [chaincopied, setchainCopied] = useState(false);
    const [idcopied, setidCopied] = useState(false);
    const [symbolcopied, setsymbolCopied] = useState(false);
    const [expcopied, setexpCopied] = useState(false);

    

    const CopyAddress = () => {
        navigator.clipboard.writeText('https://bsc-dataseed.binance.org/');
        setaddressCopied(true);
    }

    const CopyChain = () => {
        navigator.clipboard.writeText('Smart Chain');
        setchainCopied(true);
    }

    const CopyChainID = () => {
        navigator.clipboard.writeText('56');
        setidCopied(true);
    }

    const CopySymbol = () => {
        navigator.clipboard.writeText('BNB');
        setsymbolCopied(true);
    }

    const CopyExplorer = () => {
        navigator.clipboard.writeText('https://bscscan.com');
        setexpCopied(true);
    }

    useEffect(() => {
        setTimeout(() => {
            if(addresscopied) setaddressCopied(false)
            if(chaincopied) setchainCopied(false)
            if(idcopied) setidCopied(false)
            if(symbolcopied) setsymbolCopied(false)
            if(expcopied) setexpCopied(false)
        }, 1500)
    }, [addresscopied, chaincopied, idcopied, symbolcopied, expcopied])

    return(
        <Section id="setwallet">
            <TopWrapper>
                <TopColumn>
                <InfoBox animate={animateInfo}>
                        <InfoIconRow>
                            <InfoIconNotif />
                        </InfoIconRow>
                        <InfoTextRow id="infosetwallet">
                            
                        </InfoTextRow>
                    </InfoBox>
                </TopColumn>
                <TopText>
                    <Title><span>·</span> set up your wallet <span>·</span></Title>
                    <Subtitle><h1>The most recommended wallets are <span>MetaMask</span> and <span>Trust Wallet</span>. Pick one of them according to your needs.</h1></Subtitle>
                </TopText>
                <TopColumn></TopColumn>
            </TopWrapper>
            <Grid>
                 <Wrapper>
                <ColumnLeft>
                    <IconRow>
                        <Image src={Metamask} alt="logo" width="340px" height="60px" />
                    </IconRow>
                    <IconsRow>
                        <Icon href="https://play.google.com/store/apps/details?id=io.metamask&hl=es&gl=US" target="_blank" rel="noreferrer">
                        <Image src={Google} alt="play" width="150px" height="45px" style={{transform: 'scale(0.8)'}}/>
                        </Icon>
                        <Icon href="https://apps.apple.com/es/app/metamask-blockchain-wallet/id1438144202" target="_blank" rel="noreferrer">
                        <Image src={Store} alt="play" width="150px" height="45px" style={{transform: 'scale(0.8)'}}/>
                        </Icon>
                        <IconWeb href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank" rel="noreferrer">
                        <Image src={Chrome} alt="play" width="150px" height="45px" style={{transform: 'scale(0.8)'}}/>
                        </IconWeb>
                    </IconsRow>
                </ColumnLeft>
                <ColumnRight>
                <IconRow>
                <Image src={Trust} alt="logo" width="300px" height="60px" />
                    </IconRow>
                    <IconsRow>
                        <Icon href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dwebsite" target="_blank" rel="noreferrer">
                        <Image src={Google} alt="play" width="150px" height="45px" style={{transform: 'scale(0.8)'}}/>
                        </Icon>
                        <Icon href="https://apps.apple.com/app/apple-store/id1288339409?mt=8" target="_blank" rel="noreferrer">
                        <Image src={Store} alt="play" width="150px" height="45px" style={{transform: 'scale(0.8)'}}/>
                        </Icon>
                        <Icon href="https://trustwallet.com/dl/apk" target="_blank" rel="noreferrer">
                        <Image src={Apk} alt="play" width="150px" height="45px" />
                        </Icon>
                        </IconsRow>
                </ColumnRight>
                </Wrapper>
                <GridBottomTitle><h1>Once is installed create an account to get your wallet address.</h1><InfoIcon onClick={ShowInfoBox}/></GridBottomTitle>
                <GridBottomTitleSmart><h1>Once is installed create an account to get your wallet address.</h1><InfoIconSmart onClick={ShowInfoBoxSmart}/></GridBottomTitleSmart>
                <GridBottomTitleTwo><h1>To import BSC Chain go to Settings &#x27A1; Network &#x27A1; Add Network and copy-paste this:</h1></GridBottomTitleTwo>
                <BSCColumn id="boxOne">
                        <BoxMaxiRow>
                            <CopyTopIconHolder>
                                <IconButton onClick={CopyAddress}><CopyIcon /></IconButton>
                            </CopyTopIconHolder>
                            <Text><h1>New RPC URL: https://bsc-dataseed.binance.org/</h1></Text>
                            <TopHidden>
                            {addresscopied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="green"/>
                                <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg><span>Copied!!!</span></>}
                            </TopHidden>
                        </BoxMaxiRow>
                    <BoxRow>
                        <BoxMiniRow>
                            <CopyIconHolder>
                                <IconButton onClick={CopyChain}><CopyIcon /></IconButton>
                            </CopyIconHolder>
                            <Text><h1>Network Name: Smart Chain</h1></Text>
                            <Hidden>
                            {chaincopied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="green"/>
                                <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg><span>Copied!!!</span></>}
                            </Hidden>
                        </BoxMiniRow>
                        <BoxMiniRow>
                            <CopyIconHolder>
                                <IconButton onClick={CopyChainID}><CopyIcon /></IconButton>
                            </CopyIconHolder>
                            <Text><h1>Chain ID: 56</h1></Text>
                            <Hidden>
                            {idcopied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="green"/>
                                <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg><span>Copied!!!</span></>}
                            </Hidden>
                        </BoxMiniRow>
                    </BoxRow>
                    <BoxRow>
                        <BoxMiniRow>
                            <CopyIconHolder>
                                <IconButton onClick={CopySymbol}><CopyIcon /></IconButton>
                            </CopyIconHolder>
                            <Text><h1>Symbol: BNB</h1></Text>
                            <Hidden>
                            {symbolcopied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="green"/>
                                <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg><span>Copied!!!</span></>}
                            </Hidden>
                        </BoxMiniRow>
                        <BoxMiniRow>
                            <CopyIconHolder>
                                <IconButton onClick={CopyExplorer}><CopyIcon /></IconButton>
                            </CopyIconHolder>
                            <Text><h1>Block Explorer: bscscan.com</h1></Text>
                            <Hidden>
                            {expcopied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="green"/>
                                <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg><span>Copied!!!</span></>}
                            </Hidden>
                        </BoxMiniRow>
                    </BoxRow>
                    
                </BSCColumn> 
            </Grid>
            <Navigation>
                <DArrowDownHolder>
                <LinkS to="getstarted" smooth={true} duration={750} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </DArrowDownHolder>
                <DArrowUpHolder>
                    <IconButton onClick={toggleHome}><ArrowUp /></IconButton>
                </DArrowUpHolder>
            </Navigation>
            <Lightbox id="lightbox" className="lightbox"/>
        </Section>
    )
}

export default SetWallet;