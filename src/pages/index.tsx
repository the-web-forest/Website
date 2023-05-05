import dynamic from 'next/dynamic';

import type { NextPage } from 'next';
import Header from 'components/header';
import BannerSection from 'sections/Banner';
import HeaderSection from 'sections/Header';
import HowItWorkSection from 'sections/HowItWork';
import ContactSection from 'sections/Contact';
import FooterSection from 'sections/Footer';
import TeamSection from 'sections/Team';
import styles from 'styles/Home.module.css';
import AboutSection from 'sections/About';
import DonateSection from 'sections/Donate';

const NewsSection = dynamic(() => import('sections/News'), {
	loading: () => <p>Loading...</p>
});

const PartnersSection = dynamic(() => import('sections/Partners'), {
	loading: () => <p>Loading...</p>
});

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
