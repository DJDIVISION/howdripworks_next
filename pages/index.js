import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div className={styles.container}>
     <Header />
    <NavBar />
     <h1>Wabbit, you suck!!!</h1>
    </div>
  )
}
