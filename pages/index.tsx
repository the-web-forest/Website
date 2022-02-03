import type { NextPage } from 'next'
import Header from '../components/header'
import BannerSection from '../sections/Banner'
import HeaderSection from '../sections/Header'
import HowItWork from '../sections/HowItWork'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <HeaderSection/>
      <BannerSection/>
      <HowItWork/>
    </div>
  )
}

export default Home
