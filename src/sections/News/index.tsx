import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import NewsCard from 'components/NewsCard';
import useNews from './useNews';

import styles from './styles.module.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

const NewsSection = () => {
	const news = useNews();
	const [slideIndex, setSlideIndex] = useState<number>(0);

	const SwiperButtonPrev = ({ children }: any) => {
		const swiper = useSwiper();
		return (
			<button
				className={styles.newsPrev}
				disabled={swiper.isBeginning}
				onClick={() =>
					!swiper.isBeginning && (swiper.slidePrev(), setSlideIndex(slideIndex + 1))
				}
			>
				{children}
			</button>
		);
	};

	const SwiperButtonNext = ({ children }: any) => {
		const swiper = useSwiper();

		return (
			<button
				className={styles.newsNext}
				disabled={swiper.isEnd}
				onClick={() => {
					if (!swiper.isEnd) {
						swiper.slideNext();
						setSlideIndex(slideIndex - 1);
					}
				}}
			>
				{children}
			</button>
		);
	};

	const swiperProps: any = {
		centeredSlides: true,
		centeredSlidesBounds: true,
		centerInsufficientSlides: true,
		slidesPerView: 'auto',
		freeMode: true,
		spaceBetween: 32,
		onSlideChange: (swiper: any) => setSlideIndex(swiper.activeIndex)
	};

	return (
		<>
			<div className={styles.news}>
				<div className={styles.container}>
					<div className={styles.newsInner}>
						<h2 className={styles.newsTitle}>
							O que está acontecendo com <br /> <u>o meio ambiente?</u>{' '}
						</h2>

						{!news.length && <div>Carregando...</div>}

						{news.length && (
							<>
								<Swiper {...swiperProps}>
									<SwiperButtonPrev>
										<FaAngleLeft />
									</SwiperButtonPrev>
									{news.map((slide, i) => (
										<SwiperSlide className={styles.newsSlide} key={i}>
											<NewsCard
												title={slide.title}
												date={slide.date}
												newsUrl={slide.link}
												photoUrl={slide.photoUrl}
											/>
										</SwiperSlide>
									))}
									<SwiperButtonNext>
										<FaAngleRight />
									</SwiperButtonNext>
								</Swiper>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsSection;
