import styles from './style.module.css'

interface DonateButtonProps {
    text: string
    target: string
    url: string
}

const DonateButton = ({ 
    text, 
    target = '_blank', 
    url 
}: DonateButtonProps) => {
    return (
        <a href={url} target={target} >
            <div className={styles.container}>
                {text}
            </div>
        </a>
    )
}

export default DonateButton