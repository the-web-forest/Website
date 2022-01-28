import styles from './style.module.css'

interface FilledButtonProps {
    text: string
    target?: string
    url?: string
    type: 'function' | 'link'
    onClickFunction?: () => void,
    width?: string
}

const FilledButton = ({ 
    text, 
    target = '_blank', 
    url,
    type = 'link',
    onClickFunction,
    width = 'auto'
}: FilledButtonProps) => {

    const getWrapper = (elem: JSX.Element) => {
        switch(type) {
            case 'link': 
                return (
                    <a href={url} target={target} >
                        {elem}
                    </a>
                )
            case 'function': 
                return (
                    <a onClick={() => (onClickFunction) ? onClickFunction() : null}>
                        {elem}
                    </a>
                )
        }
    }

    const getMiddle = (): JSX.Element => {
        return (
            <div className={styles.container} style={{ width }}>
                {text}
            </div>
        )
    }

    const renderButton = () => {
        const middle = getMiddle()
        return getWrapper(middle) 
    }

    return renderButton()
}

export default FilledButton