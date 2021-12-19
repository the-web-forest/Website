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

                    <HeaderButton
                        text='Quem somos'
                        selected
                        url={`${Settings.APP_URL}#about`}
                    />

                    <HeaderButton
                        text='Como funciona'
                        url={`${Settings.APP_URL}#works`}
                    />

                    <HeaderButton
                        text='Nossas Ações'
                        url={`${Settings.APP_URL}#actions`}
                    />
                    
                    <HeaderButton
                        text='Floresta Digital'
                        url={`${Settings.APP_URL}#forest`} 
                    />
                    
                </div>

                <div id={styles.divRight}>

                    <OutlinedButton
                        text='Login'
                        type='function'
                        clickHandler={() => alert('Login')}
                        url={Settings.APP_URL}
                    />

                    
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