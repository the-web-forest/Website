import { IconType } from 'react-icons'
import styles from './style.module.css'

export interface CircleIconProps {
    Icon: IconType;
    iconSize: number;
    iconColor: string;
    bgColor: string;
    circleSize: string;
}

const CircleIcon = ({Icon, bgColor, circleSize, iconSize, iconColor}: CircleIconProps) => {
    return (
        <div 
        className={styles.icon} 
        style={{backgroundColor: bgColor, width: circleSize, height: circleSize}}>
            <Icon size={iconSize} color={iconColor} />
        </div>
    )
}

export default CircleIcon;