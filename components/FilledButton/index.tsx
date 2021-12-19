import styles from './style.module.css'

interface FilledButtonProps {
    text: string
    target: string
    url: string
}

const FilledButton = ({ 
    text, 
    target = '_blank', 
    url 
}: FilledButtonProps) => {
    return (
        <a href={url} target={target} >
            <div className={styles.container}>
                {text}
            </div>
        </a>
    )
}

export default FilledButton