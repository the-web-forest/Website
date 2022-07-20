import { Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { useEffect, useState } from 'react';
import GetAllPartnersUseCase from '../../use-cases/GetAllPartnersUseCase';
import Partners from '../../core/domain/Partners';
import { StyledCarouselProvider } from './styles';

const PartnersSection: React.FC = () => {
  const getAllPartnersUseCase = new GetAllPartnersUseCase();
  const [width, setWidth] = useState(0);
  const [partners, setPartners] = useState<Partners[]>([]);
  const DEFAULT_SLIDES_INTERVAL = 3000;

  const loadPartners = async () => {
    if (partners && partners.length) return;
    const loadPartners = await getAllPartnersUseCase.run();
    setPartners(loadPartners);
  };

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const handleWindowResize = () => {
    const dimensions = getWindowDimensions();
    setWidth(dimensions.width);
  };

  useEffect(() => {
    loadPartners();
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  const getVisibleSlides = (): number => {
    const BREAKPOINTS = {
      MINI: 400,
      SMALL: 500,
      MEDIUM: 700,
      LARGE: 1200,
    };

    const ITEMS_PER_BLOCK = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      SIX: 6,
    };

    if (width <= BREAKPOINTS.MINI) {
      return ITEMS_PER_BLOCK.ONE;
    }

    if (width <= BREAKPOINTS.SMALL) {
      return ITEMS_PER_BLOCK.TWO;
    }

    if (width <= BREAKPOINTS.MEDIUM) {
      return ITEMS_PER_BLOCK.THREE;
    }

    if (width <= BREAKPOINTS.LARGE) {
      return ITEMS_PER_BLOCK.FOUR;
    }

    return ITEMS_PER_BLOCK.SIX;
  };

  return (
    <>
      <div>
        <div>Quem faz</div>
      </div>

      <StyledCarouselProvider
        id="caroulsel"
        naturalSlideWidth={100}
        naturalSlideHeight={200}
        totalSlides={partners.length}
        infinite={true}
        visibleSlides={getVisibleSlides()}
        interval={DEFAULT_SLIDES_INTERVAL}
        isPlaying={true}
        isIntrinsicHeight={true}
      >
        {' '}
        {/** @ts-ignore */}
        <Slider>
          {!partners.length && <div>Carregando...</div>}
          {partners.map((partner, i) => (
            <>
              {' '}
              {/** @ts-ignore */}
              <Slide key={i} index={i}>
                <a href={partner.url}>
                  <img src={partner.photoUrl} alt={partner.name} />
                </a>
              </Slide>
            </>
          ))}
        </Slider>
      </StyledCarouselProvider>
    </>
  );
};

export default PartnersSection;
