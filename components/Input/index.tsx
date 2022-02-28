import styles from './styles.module.css'

interface InputProps {
    type: string
    name: string
    placeholder: string
    value: string
    onChangeFunction: (val: string) => void
    maxLength: number
    error?: boolean
}

const Input = ({ type, name, placeholder, value, onChangeFunction, maxLength, error = false }: InputProps) => {

    const isOnErrorState = () => (error === true)

    const getClass = (): string => {
        return (isOnErrorState()) ? styles.error : String.call(null)
    }

    return (
        <>
            <input 
                id={styles.container} 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={(e) => onChangeFunction(e.target.value)}
                maxLength={maxLength}
                className={getClass()}
            />
        </>
    )
}

export default Input