import MemberCard from '../../components/MemberCard'
import styles from './style.module.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useState } from 'react';
import GetAllMembersUseCase from '../../use-cases/GetAllMembersUseCase';

const TeamSection = () => { 

    const getAllMembersUseCase = new GetAllMembersUseCase()

    const [members] = useState(getAllMembersUseCase.run() || [])

    return (
        <>
        <div id={styles.container}>
            <div id={styles.title}>Quem faz</div>
        </div>
        
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={200}
            totalSlides={members.length}
            infinite={true}
            visibleSlides={6}
            className={styles.carousel}
            interval={5000}
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