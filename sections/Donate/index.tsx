import FilledButton, { FilledColor } from '../../components/FilledButton'
import Title from '../../components/Title'
import styles from './styles.module.css'

const text = 'Apoie nosso projeto e invista no meio ambiente'

const DonateSection = () => {
    return (
        <div id={styles.container}>
            <div id={styles.photo} />
            <div id={styles.description}>
               <div id={styles.catarseLogo} />
               <Title text={text} color="#4c4c4c" />
               <FilledButton color={FilledColor.darkGreen} width='154px' text='Saiba Mais'  />
            </div>
        </div>
    )
}

export default DonateSection