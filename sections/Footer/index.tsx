import SocialMediaIcon from '../../components/SocialMediaIcon'
import styles from './styles.module.css'

const FooterSection = () => {
    return (
        <div className={styles.container}>
            <div id={styles.block}>
                <div id={styles.blockTop}>
                    <div id={styles.blockLogo} />
                </div>
                <div id={styles.blockBottom}>
                    <div id={styles.blockSocialMediaText}>Siga nossas Redes Sociais</div>
                    <div id={styles.socialMediaBlock}>
                        <SocialMediaIcon/>
                        <SocialMediaIcon/>
                        <SocialMediaIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection