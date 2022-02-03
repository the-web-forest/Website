import styles from './style.module.css'

interface NewsCardProps {
    photoUrl: string
    title: string
    date: string
    newsUrl: string
}

const NewsCard = ({ photoUrl, title, date, newsUrl }: NewsCardProps) => {

    const openNews = () => {
        window.open(newsUrl, '_blank')
    }

    const getTitle = () => {
        const MAX_LENGTH = 55 
        let formatedTitle = title
        if(title.length > MAX_LENGTH) {
            formatedTitle = `${title.slice(0, 50)}...`
        }
        return formatedTitle
    }

    const getStyle = () => {
        const withPhoto = { backgroundImage: `url(${photoUrl})` }
        return (photoUrl) ? withPhoto : {}
    }

    return (
        <div title={title} id={styles.container}>
            <div title={title} style={getStyle()} id={styles.photo}/>
            <div title={title} id={styles.title}>{getTitle()}</div>
            <div id={styles.date}>{date}</div>
            <div onClick={() => openNews()} id={styles.link}>Saiba mais</div>
        </div>
    )
}

export default NewsCard