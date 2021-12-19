import styles from './style.module.css'

interface HeaderButtonProps {
    text: string
    selected?: boolean
    url: string
    target?: string
} 

const HeaderButton = ({ text, url, target = '_self', selected = false }: HeaderButtonProps) => {

    const getClassName = (): string => {
        return (selected) ? styles.selected : String.call(null)
    }

    return(
        <a href={url} target={target} >
            <div id={styles.container} className={getClassName()}>
            <div id={styles.text}>{text}</div>
                <div id={styles.selected}>
                    <div id={styles.dot} />
                </div>
            </div>
        </a>
    )
}

export default HeaderButton