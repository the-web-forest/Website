import AboutCard from '../../components/AboutCard'
import styles from './style.module.css'

const AboutSection = () => {

    const fakeTitle = `Uma voz para o meio ambiente`
    const fakeText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor dapibus ullamcorper. Quisque a enim ut magna tristique sollicitudin eget et nisi. Fusce ac rutrum lacus. Integer rutrum dictum rhoncus. In id finibus ligula. Nunc nulla felis, viverra id sem at, accumsan tincidunt tortor. Cras maximus purus sed elit posuere dignissim. Donec convallis maximus urna ac suscipit. Donec malesuada dolor non malesuada molestie. `

    return (
        <div id={styles.container}>
            <div id={styles.title}>Quem somos nós e <br /> como atuamos</div>
            <div id={styles.cards}>
                <AboutCard
                    icon={0}
                    title={fakeTitle}
                    text={fakeText}

                />
                
                <AboutCard
                    icon={1}
                    title={fakeTitle}
                    text={fakeText}

                />
                <AboutCard
                    icon={2}
                    title={fakeTitle}
                    text={fakeText}
                />
            </div>
        </div>
    )

}

export default AboutSection