import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { useEffect, useState } from 'react';
import NewsCard from '../../components/NewsCard';
import GetAllNewsUseCase from '../../use-cases/GetAllNewsUseCase';
import styles from './styles.module.css';

const NewsSection = () => {
  const getAllNewsUseCase = new GetAllNewsUseCase();
  const [news] = useState(getAllNewsUseCase.run() || []);

  const [width, setWidth] = useState(0);
  const DEFAULT_SLIDES_INTERVAL = 3000;

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const handleWindowResize = () => {
    const dimensions = getWindowDimensions();
    setWidth(dimensions.width);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  const getVisibleSlides = (): number => {
    const BREAKPOINTS = {
      MINI: 400,
      MEDIUM: 700,
      LARGE: 1200,
    };

    const ITEMS_PER_BLOCK = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
    };

    if (width <= BREAKPOINTS.MINI) {
      return ITEMS_PER_BLOCK.ONE;
    }

    if (width <= BREAKPOINTS.MEDIUM) {
      return ITEMS_PER_BLOCK.TWO;
    }

    if (width <= BREAKPOINTS.LARGE) {
      return ITEMS_PER_BLOCK.THREE;
    }

    return ITEMS_PER_BLOCK.FOUR;
  };

  return (
    <>
      <div id={styles.container}>
        <div id={styles.title}>
          O que está acontecendo com <br /> <u>o meio ambiente?</u>{' '}
        </div>
      </div>

      <div id={styles.newsSection}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={news.length}
          infinite={true}
          visibleSlides={getVisibleSlides()}
          className={styles.carousel}
          interval={DEFAULT_SLIDES_INTERVAL}
          isPlaying={true}
          isIntrinsicHeight={true}
        >
          <Slider>
            {news.map((x, i) => (
              <Slide className={styles.newsSlide} key={i} index={i}>
                <NewsCard
                  title={x.title}
                  date={x.date}
                  newsUrl={x.link}
                  photoUrl={x.photoUrl}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </>
  );
};

export default NewsSection;
