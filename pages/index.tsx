import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Image src={'/images/logo.svg'} alt='Web Forest' layout='fill'/> 
    </div>
  )
}

export default Home
