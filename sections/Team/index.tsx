import MemberCard from '../../components/MemberCard'
import styles from './style.module.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import GetAllMembersUseCase from '../../use-cases/GetAllMembersUseCase';

const TeamSection = () => { 

    const getAllMembersUseCase = new GetAllMembersUseCase()
    const [members] = useState(getAllMembersUseCase.run() || [])
    const [width, setWidth] = useState(0)

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const handleWindowResize = () => {
        const dimensions = getWindowDimensions()
        setWidth(dimensions.width)
    }

    useEffect(() => {
        handleWindowResize()
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    })

    const getVisibleSlides = (): number => {

        const BREAKPOINTS = {
            MINI: 400,
            MEDIUM: 700,
            LARGE: 1200
        }

        if(width <= BREAKPOINTS.MINI) {
            return 2
        }

        if(width <= BREAKPOINTS.MEDIUM) {
            return 3
        }

        if(width <= BREAKPOINTS.LARGE) {
            return 4
        }

        return 6

    }


    return (
        <>
        <div id={styles.container}  >
            <div id={styles.title}>Quem faz</div>
        </div>
        
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={200}
            totalSlides={members.length}
            infinite={true}
            visibleSlides={getVisibleSlides()}
            className={styles.carousel}
            interval={3000}
            isPlaying={true}
            isIntrinsicHeight={true}
        >
            <Slider>
            { members.map((x, i) => 
                <Slide key={i} index={i}>
                    <MemberCard
                        profilePictureUrl={x.profilePictureUrl}
                        description={x.description}
                        linkedInUrl={x.linkedInUrl}
                        name={x.name}
                    />
                </Slide>
            ) }
               
            </Slider>
        </CarouselProvider>
    </>
    )
}

export default TeamSection