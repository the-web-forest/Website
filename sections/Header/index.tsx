import DonateButton from '../../components/DonateButton'
import Settings from '../../core/settings'
import styles from './styles.module.css'

const HeaderSection = () => {
    return(
        <div className={styles.container}>
                
                <div id={styles.divLeft}>
                    <a href={Settings.APP_URL}>
                        <div id={styles.logo} title={Settings.APP_NAME}/>
                    </a>
                </div>

                <div id={styles.divRight}>
                    <DonateButton
                        text='Faça uma Doação'
                        url='https://www.webforest.eco' 
                        target='_blank'        
                    />
                </div>
        </div>
    )
}

export default HeaderSection