import type { NextPage } from 'next';
import Header from '../components/header';
import BannerSection from '../sections/Banner';
import HeaderSection from '../sections/Header';
import HowItWorkSection from '../sections/HowItWork';
import ContactSection from '../sections/Contact';
import FooterSection from '../sections/Footer';
import NewsSection from '../sections/News';
import TeamSection from '../sections/Team';
import styles from '../styles/Home.module.css';
import AboutSection from '../sections/About';
import DonateSection from '../sections/Donate';
import PartnersSection from '../sections/Partners';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeaderSection />
      <BannerSection />
      <HowItWorkSection />
      <DonateSection />
      <NewsSection />
      <AboutSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Home;
