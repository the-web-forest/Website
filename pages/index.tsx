import type { NextPage } from 'next'
import Image from 'next/image'
import DonateButton from '../components/FilledButton'
import Header from '../components/header'
import HeaderSection from '../sections/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <HeaderSection/>
    </div>
  )
}

export default Home
