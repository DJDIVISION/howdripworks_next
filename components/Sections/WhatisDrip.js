import styled from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Pulse} from "../../animations";
import {Description10, Description15, Description20} from "./Elements";

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 660px){
        height: 1200px;
    }
`;


const Title = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    @media screen and (max-width: 660px){
        height: 100px;
    }
    h1{
        font-size: 48px;
        color: white;
        text-shadow: black -1px 2px, #008080 -2px 2px, #008080 -3px 3px, #008080 -4px 4px, black -5px 5px;
        @media screen and (max-width: 660px){
            font-size: 38px;
            transform: translate(0, 15px);
        }
    }
`;

const Navigation = styled.div`
    width: 70%;
    height: 10vh;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 660px){
        height: 75px;
        width: 95%;
    }
`;

const Item = styled(motion.div)`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media screen and (max-width: 660px){
        width: 150px;
    }
    h1{
        font-size: 20px;
        color: white; 
        text-shadow: black -1px 2px,  #008080 -2px 2px,  #008080 -3px 3px,  black -4px 4px;
        @media screen and (max-width: 660px){
            font-size: 18px;
        }
    }
`; 

const TitlePulse = {
    start: {
        scale: 1,
    },
    end: {
        scale: 0.95,
        transition: {
            duration: 2,
            repeat: "Infinity",
            repeatType: "reverse"
        }
    }
}

const WhatisDrip = () => {

    return(
        <Section>
            <Title><h1>what is drip?</h1></Title>
            <Description20><h1>The <span>drip</span> network, based on the <span>drip</span> Token, is a smart contract operating on the Binance Smart blockchain <strong>(BSC)</strong> that returns 1% daily of your initial deposit for 365 days (x3.65). Thant means that a single deposit of 1 <span>drip</span> will return 0.01 daily <span>drip</span> during 365 days.</h1></Description20>
            <Description15><h1>After our first deposit in the <span>drip</span> Faucet we can extend our benefits through hydrating our earnings (compounding) or with more deposits. But we will learn about this in more depth a bit later.</h1></Description15>
            <Description15><h1>To get started on the <span>drip</span> network you will need a wallet that supports the BSC chain and a <strong>buddy</strong> address (referrer wallet) that you'll find below. The most recommended wallets are <strong>Metamask</strong> and <strong>Trust Wallet</strong>.</h1></Description15>
            <Description10><h1 style={{width: '97.5%'}}>If you don't know how to set up your wallet address scroll down to the Set Wallet section. If you already own a BSC address scroll to the Get Started Section.</h1></Description10>
            <Navigation>
            <LinkS to="setwallet" smooth={true} duration={750} spy={true} exact="true"><Item variants={TitlePulse} initial="start" animate="end"><h1>set wallet</h1></Item></LinkS>
            <LinkS to="getstarted" smooth={true} duration={750} spy={true} exact="true"><Item variants={TitlePulse} initial="start" animate="end"><h1>get started</h1></Item></LinkS>
                {/* <Item to="setwallet" smooth={true} duration={750} spy={true} exact="true"><h1>set wallet</h1></Item>
                <Item to="getstarted" smooth={true} duration={750} spy={true} exact="true"><h1>get started</h1></Item> */}
            </Navigation>
        </Section>
    )
}

export default WhatisDrip;