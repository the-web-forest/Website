import MemberCard from '../../components/MemberCard'
import styles from './style.module.css'

const TeamSection = () => { 
    return (
        <div id={styles.container}>
            <div id={styles.title}>Quem faz</div>
            <div id={styles.team}>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
            </div>
        </div>
    )
}

export default TeamSection