import styles from './styles.module.css';
import DonateButton from '../../components/FilledButton';
import Title from '../../components/Title';
import Settings from '../../core/settings';

const BannerSection = () => {
    return (
        <div className={styles.container}>
           <div className={styles.title}>    
                <Title text='Floresta Digital Impacto Real' color='#fff'/>
           </div>
           <div className={styles.subtitle}>
               Sua doação ajuda na reustaração do meio ambiente
           </div>
           <DonateButton
                text='Faça uma Doação'
                url={Settings.APP_URL}
                target='_blank'        
            />
        </div>
    )
}

export default BannerSection;