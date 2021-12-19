import DonateButton from '../../components/DonateButton'
import HeaderButton from '../../components/HeaderButton'
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
                        url='http://google.com.br'
                    />

                    <HeaderButton
                        text='Como funciona'
                        url='http://google.com.br'
                    />

                    <HeaderButton
                        text='Nossas Ações'
                        url='http://google.com.br'
                    />
                    
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