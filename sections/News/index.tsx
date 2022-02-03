import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import { useState } from 'react'
import NewsCard from '../../components/NewsCard'
import GetAllNewsUseCase from '../../use-cases/GetAllNewsUseCase'
import styles from './styles.module.css'

const NewsSection = () => {

    const getAllNewsUseCase = new GetAllNewsUseCase()
    const [news] = useState(getAllNewsUseCase.run() || [])

    return (
        <>
            <div id={styles.container}>
                <div id={styles.title}>O que está acontecendo com <br /> <u>o meio ambiente?</u> </div>
            </div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={news.length}
                infinite={true}
                visibleSlides={4}
                className={styles.carousel}
                interval={5000}
                isPlaying={true}
                isIntrinsicHeight={true}
            >
                <Slider>
                { news.map((x, i) => 
                    <Slide key={i} index={i}>
                        <NewsCard
                        title={x.title}
                        date={x.date}
                        newsUrl={x.link}
                        photoUrl={x.photoUrl}
                        />
                    </Slide>
                ) }
                </Slider>
            </CarouselProvider>
        </>
    )
}

export default NewsSection