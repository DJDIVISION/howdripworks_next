import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import axios from "axios";
import styled, {keyframes} from "styled-components";
import {Link as LinkS} from "react-scroll";
import {motion} from "framer-motion";
import {Link as LinkR} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import {MenuContext} from "./context";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DripLogo from "../../images/drip_logo.png";
import {TitlePulse} from "../../animations";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


const Nav = styled.nav`
    width: 100vw;
    height: 80px;
    background: #008080;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: ${({ scrollNavDown }) => (scrollNavDown ? "-100px" : "0")};
    opacity: 0.9;
    transition: 0.8s all ease;
    z-index: 1000;
`;

const Logo  = styled(motion.div)`
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    h1{
        font-size: 22px;
        padding-left: 30px;
        font-family: 'Aquino-Demo';
        color: white;
        text-shadow: black -1px 2px,  black -2px 2px,  black -3px 3px;
        @media screen and (max-width: 1100px){
            padding-left: 0px;
        }
    }
    @media screen and (max-width: 1100px){
        font-size: 20px;
        width: 250px;
        font-weight: 100;
    }
`;



const Price = styled.div`
    width: 150px;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        display: none;
    }
`;

const USDValue = styled.div`
    width: 100%;
    height: 50%;
    color: white;
    font-size: 20px;
    display: inline-flex;
    font-family: "Gruppo";
    align-items: center;
    justify-content: center;
    font-weight: bold;
    h1{
        font-size: 20px;
        font-family: "Gruppo";
        margin: 0 4px;
        font-weight: 700;
        text-shadow: black -1px 2px,  black -2px 2px,  black -3px 3px;
    }
    @media screen and (max-width: 660px){
        width: 50%;
        height: 100%;
    }
    span{
        font-family:"Aquino-Demo";
        //margin: 0 5px;
        font-weight: 400;
        text-shadow: black -1px 2px,  black -2px 2px,  black -3px 3px;
    }
`;

const BNBValue = styled.div`
    width: 100%;
    height: 50%;
    display: inline-flex;
    color: white;
    align-items: center;
    justify-content: center;
    font-family: "Gruppo";
    h1{
        font-size: 20px;
        font-family: "Gruppo";
        margin: 0 4px;
        color: white;
        text-shadow: black -1px 2px,  black -2px 2px,  black -3px 3px;
    }
    span{
        font-size: 20px;
        font-weight: bold;
        color: white;
        text-shadow: black -1px 2px,  black -2px 2px,  black -3px 3px;
    }
    @media screen and (max-width: 660px){
        width: 50%;
        height: 100%;
    }
`;

const Links = styled.div`
    width: 550px;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 660px){
        display: none;
    }
`;

const Link = styled(motion.div)`
    width: 137.5px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h1{
        font-size: 18px;
        color: white;
        text-shadow: black -1px 2px,  black -2px 2px,  black -3px 3px;
    }
`;

const Menu = styled(motion.div)`
    height: 560px;
    width: 100%;
    background: #008080;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    position: absolute;
    z-index: 1000;
    @media screen and (min-width: 660px){
        display: none;
    }
    
`;

const Burguer = styled(MenuIcon)`
    &&&{
        color: white;
        @media screen and (min-width: 1100px){
            display: none;
        }
    }
`;

const Times = styled(MenuOpenIcon)`
    color: white;
`;

const MenuList = styled.div`
    width: 80%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(0, 10px);
`;

const ItemList = styled.div`
    height: 50px;
    margin: 4px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #48d1cc;
    border-radius: 20px;
`;


const Item = styled(motion.div)`
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 20px;
        color: white;
        text-shadow: black -1px 2px,  black -2px 2px,  black -3px 3px;
    }
`;



const ImageHolder = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 110px;
        
    }
`;

const Lightbox = styled.div`
    width: 100vw;
    height: 100vh;
    top: 80px;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    z-index: 100;
`;

const SmartPrice  = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    transform: translate(0, 20px);
`;




const NavBar = () => {

    const [active, setActive] = useState("menuOne");
    const [scrollNavDown, setScrollNavDown] = useState(false);

    useEffect(() => {
       window.addEventListener('scroll', changeNavDown) 
    }, []);

    let animate = {};
    if(active === "menuOne") animate = { opacity: 0, y: '-100vh' };
    else if (active === "menuTwo") animate = {  opacity: 1, y: 0 };
    const switchToTwo = () => {
        if(active === "menuOne"){
            setActive("menuTwo");
        } else if(active === "menuTwo"){
            setActive("menuOne");
        }
    }

    const changeNavDown = () => {
        if(window.scrollY >= 50) {
            setScrollNavDown(true); 
            setActive("menuOne");
        } 
        else {
            setScrollNavDown(false)
        }
    }

    const icon = active === "menuOne" ? <Burguer /> : <Times />
    const lightbox = active === "menuTwo" ? <Lightbox /> : "" 

    const getPrice = async () => { 
       const res = await axios.get("https://api.coingecko.com/api/v3/coins/drip-network");
       const USD = res.data.market_data.current_price.usd;
       const BNB = res.data.market_data.current_price.bnb.toFixed(4);
       const usdcounter = document.getElementById("usdcounter");
       const usdcountersmart = document.getElementById("usdcountersmart");
       const bnbcounter = document.getElementById("bnbcounter");
       const bnbcountersmart = document.getElementById("bnbcountersmart");
       usdcounter.innerHTML = USD;
       usdcountersmart.innerHTML = USD;
       bnbcounter.innerHTML = BNB;
       bnbcountersmart.innerHTML = BNB;
    }

    useEffect(() => {
        getPrice()
    }, [])

    
        

  return (
      <>
      <Nav scrollNavDown={scrollNavDown}>
          <Logo variants={TitlePulse} initial="start" animate="end"><h1>how drip works</h1></Logo>
          <Price>
            <USDValue ><span>drip</span> <h1>- $</h1><h1 id="usdcounter"></h1></USDValue>
            <BNBValue >  <span>(</span><h1 id="bnbcounter"></h1><h1>BNB</h1><span>)</span></BNBValue>
          </Price>
          <IconButton onClick={switchToTwo}>{icon}</IconButton>
          <Links>
            <LinkS to="setwallet" smooth={true} duration={750} spy={true} exact="true" style={{transform: 'translate(-20px, 0)'}}><Link variants={TitlePulse} initial="start" animate="end"><h1>set wallet</h1></Link></LinkS>
            <LinkS to="getstarted" smooth={true} duration={750} spy={true} exact="true"><Link variants={TitlePulse} initial="start" animate="end" ><h1>get started</h1></Link></LinkS>
            
            <Link variants={TitlePulse} initial="start" animate="end"><h1>tools</h1></Link>
            <Link variants={TitlePulse} initial="start" animate="end"><h1>about us</h1></Link>
          </Links>
      </Nav>
      {lightbox}
      <Menu animate={animate} scrollNavDown={changeNavDown}>
          <ImageHolder>
              <Image src={DripLogo} alt="logo" width="100px" height="100px"/>
          </ImageHolder>
          <MenuList>
          <ItemList>
                <LinkS to="setwallet" smooth={true} duration={750} spy={true} exact="true"><Item variants={TitlePulse} initial="start" animate="end"><h1>set wallet</h1></Item></LinkS>
            </ItemList>
            <ItemList>
                <LinkS to="getstarted" smooth={true} duration={750} spy={true} exact="true"><Item variants={TitlePulse} initial="start" animate="end"><h1>get started</h1></Item></LinkS>
            </ItemList>
             <ItemList>
             <LinkS to="works" smooth={true} duration={750} spy={true} exact="true"><Item><h1 variants={TitlePulse} initial="start" animate="end">how drip works</h1></Item></LinkS>
            </ItemList>
            <ItemList>
           <Item variants={TitlePulse} initial="start" animate="end"><h1>tools</h1></Item>
            </ItemList>
            <ItemList>
           <Item variants={TitlePulse} initial="start" animate="end"><h1>the faucet</h1></Item>
            </ItemList>
          </MenuList>
          <SmartPrice>
            <USDValue ><span>drip</span><h1>- $</h1><h1 id="usdcountersmart"></h1></USDValue>
            <BNBValue >  <span>(</span><h1 id="bnbcountersmart"></h1><h1>BNB</h1><span>)</span></BNBValue>
          </SmartPrice>
      </Menu>
      </>
  )
};

export default NavBar;