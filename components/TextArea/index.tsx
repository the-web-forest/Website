import styles from './styles.module.css'

interface TextAreaProps {
    name: string
    cols: number
    rows: number
    placeholder: string
    maxLength: number
    value: string
    onChangeFunction: (val: string) => void
    error?: boolean
}

const TextArea = ({ cols, rows, name, placeholder, maxLength, value, onChangeFunction, error = false}: TextAreaProps) => {

    const isOnErrorState = () => (error === true)

    const getClass = (): string => {
        return (isOnErrorState()) ? styles.error : String.call(null)
    }

    return (
        <textarea 
            name={name}
            id={styles.container}
            cols={cols} 
            rows={rows}
            placeholder={placeholder}
            maxLength={maxLength}
            value={value}
            onChange={(e) => onChangeFunction(e.target.value)}
            className={getClass()}
        />    
    )

}

export default TextArea