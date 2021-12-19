import styles from './style.module.css'

interface DonateButtonProps {
    text: string
}

const DonateButton = ({ text }: DonateButtonProps) => {
    return (
        <div className={styles.container}>{text}</div>
    )
}

export default DonateButton