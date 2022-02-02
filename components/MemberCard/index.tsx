import styles from './styles.module.css'
import SocialMediaIcon from '../SocialMediaIcon'


const MemberCard = () => {
    return (
        <div id={styles.memberCard}>
            <div id={styles.profilePicture}/>
            <div id={styles.name}>Matheus Barros</div>
            <div id={styles.description}>Founder</div>
        </div>
    )
}

export default MemberCard