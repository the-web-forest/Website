import React from 'react'
import styles from './style.module.css'

interface OutlinedButtonProps {
    text: string
    target?: '_blank' | '_self'
    type: 'link' | 'function',
    url?: string
    clickHandler?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const OutlinedButton = ({ text, type = 'link', url, clickHandler, target = '_blank' }: OutlinedButtonProps) => {

    const isFunction = (): boolean => {
        return (type == 'function')
    }

    const isLink = (): boolean => {
        return (type == 'link')
    }

    const getContainer = () => {
        switch(true) {
            case isFunction():
                return <div id={styles.container} onClick={clickHandler}>{text}</div>
            case isLink():
                return <a id={styles.container} href={url} target={target}>{text}</a>
            default:
                throw new Error('You must define the type of button')
        }
    }

    return (
        getContainer()
    )

}

export default OutlinedButton