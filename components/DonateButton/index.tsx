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
        <div className={styles.container}>
            <a href={url} target={target} >
                {text}
            </a>
        </div>
    )
}

export default DonateButton