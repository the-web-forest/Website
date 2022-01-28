import type { NextPage } from 'next'
import Image from 'next/image'
import DonateButton from '../components/FilledButton'
import Header from '../components/header'
import BannerSection from '../sections/Banner'
import FooterSection from '../sections/Footer'
import HeaderSection from '../sections/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <HeaderSection/>
      <BannerSection/>
      <FooterSection/>
    </div>
  )
}

export default Home
