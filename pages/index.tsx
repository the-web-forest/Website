import type { NextPage } from 'next'
import Header from '../components/header'
import BannerSection from '../sections/Banner'
import HeaderSection from '../sections/Header'
import HowItWork from '../sections/HowItWork'
import ContactSection from '../sections/Contact'
import FooterSection from '../sections/Footer'
import TeamSection from '../sections/Team'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <HeaderSection/>
      <BannerSection/>
      <HowItWork/>
      <TeamSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default Home
