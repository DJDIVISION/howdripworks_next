import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import WhatisDrip from '../components/Sections/WhatisDrip'
import SetWallet from '../components/Sections/SetWallet'
import GetStarted from '../components/Sections/GetStarted'

export default function Home() {
  return (
    <div >
     <Header />
    <NavBar />
     <WhatisDrip />
     {/* <SetWallet />
     <GetStarted /> */}
    </div>
  )
}
