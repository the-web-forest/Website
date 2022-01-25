import DonateButton from '../../components/FilledButton'
import HeaderButton from '../../components/HeaderButton'
import OutlinedButton from '../../components/OutlinedButton'
import Settings from '../../core/settings'
import styles from './styles.module.css'

const HeaderSection = () => {
    return(
        <div className={styles.container}>
                
                <div id={styles.divLeft}>

                    <div id={styles.logoContainer}>
                        <a href={Settings.APP_URL}>
                            <div id={styles.logo} title={Settings.APP_NAME}/>
                        </a>
                    </div>

                    <div id={styles.menuOptions}>
                        <HeaderButton
                            text='Inicio'
                            selected
                            url={`${Settings.APP_URL}#start`}
                        />

                        <HeaderButton
                            text='Apoie'
                            url={`${Settings.APP_URL}#support`}
                        />

                        <HeaderButton
                            text='Quem Somos'
                            url={`${Settings.APP_URL}#us`}
                        />
                        
                        <HeaderButton
                            text='Contato'
                            url={`${Settings.APP_URL}#contact`} 
                        />
                    </div>
                    
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