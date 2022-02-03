import type { NextPage } from 'next'
import Header from '../components/header'
import BannerSection from '../sections/Banner'
import ContactSection from '../sections/Contact'
import FooterSection from '../sections/Footer'
import HeaderSection from '../sections/Header'
import NewsSection from '../sections/News'
import TeamSection from '../sections/Team'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <HeaderSection/>
      <BannerSection/>
      <NewsSection/>
      <TeamSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default Home
