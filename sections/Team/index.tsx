/* eslint-disable react-hooks/exhaustive-deps */
import MemberCard from '../../components/MemberCard';
import styles from './style.module.css';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import GetAllMembersUseCase from '../../use-cases/GetAllMembersUseCase';
import Member from '../../core/domain/Member';
import ArrayHelper from '../../helpers/ArrayHelper';
import { StyledCarouselProvider } from './styles';

const TeamSection = () => {
  const getAllMembersUseCase = new GetAllMembersUseCase();
  const [width, setWidth] = useState(0);
  const [members, setMembers] = useState<Member[]>([]);
  const DEFAULT_SLIDES_INTERVAL = 3000;

  const loadMembers = async () => {
    if (members && members.length) return;
    const loadedMembers = await getAllMembersUseCase.run();
    const shuffledMembers = ArrayHelper.shuffle(loadedMembers);
    setMembers(shuffledMembers);
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
    loadMembers();
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
    <section id="team">
      <div id={styles.container}>
        <h2 id={styles.title}>Quem faz</h2>
      </div>

      <StyledCarouselProvider
        id="caroulsel"
        naturalSlideWidth={100}
        naturalSlideHeight={200}
        totalSlides={members.length}
        infinite={true}
        visibleSlides={getVisibleSlides()}
        className={styles.carousel}
        interval={DEFAULT_SLIDES_INTERVAL}
        isPlaying={true}
        isIntrinsicHeight={true}
      >
        {' '}
        {/** @ts-ignore */}
        <Slider>
          {!members.length && <div>Carregando...</div>}
          {members.map((x, i) => (
            <>
              {' '}
              {/** @ts-ignore */}
              <Slide key={i} index={i} innerClassName={styles.innerSlide}>
                <MemberCard
                  profilePictureUrl={x.profilePictureUrl}
                  description={x.description}
                  linkedInUrl={x.linkedInUrl}
                  name={x.name}
                />
              </Slide>
            </>
          ))}
        </Slider>
      </StyledCarouselProvider>
    </section>
  );
};

export default TeamSection;
