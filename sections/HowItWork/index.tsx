import Title from '../../components/Title';
import styles from './styles.module.css';
import { FaShareAlt, FaDonate, FaTree } from 'react-icons/fa'
import CircleIcon from '../../components/CircleIcon';
import { IconType } from 'react-icons';
import Topic from '../../components/Topic';

interface TopicIconProp {
    Icon: IconType
}

const makeDonationTitle = <span>Faça uma doação online de qualquer valor</span>
const growTreeTitle = <span>Utilizaremos o valor para plantar árvores reais</span>
const shareTitle = <span>Acompanhe e compartilhe suas ações na Web Forest</span>
const DESCRIPTIONS = {
    ONE: 'Sua doação é feita digitalmente e pode ser de qualquer valor.',
    TWO: 'Utilizamos os recursos arrecadados para financiar plantação de árvores reais e instituições ambientais.',
    THREE: 'Compartilhe suas ações na Web Forest e estimule seus amigos e empresas a apoiar nosso projeto sem fins lucrativos.'
}

const TopicIcon = ({ Icon }: TopicIconProp) => <CircleIcon
                                                    Icon={Icon} 
                                                    bgColor='#58355E' 
                                                    circleSize='56px' 
                                                    iconColor='#fff' 
                                                    iconSize={24}  
                                                />

const HowItWork = () => {
    return (
        <div className={styles.container}>
            <Title text='Como a Web Forest funciona?' color="#4C4C4C" />
            <div className={styles.topicSection}>
                <Topic Icon={<TopicIcon Icon={FaDonate} />} 
                Title={makeDonationTitle}
                description={DESCRIPTIONS.ONE}
                />
                <Topic Icon={<TopicIcon Icon={FaTree} />} 
                Title={growTreeTitle}
                description={DESCRIPTIONS.TWO}
                />
                <Topic Icon={<TopicIcon Icon={FaShareAlt} />} 
                Title={shareTitle}
                description={DESCRIPTIONS.THREE}
                />
            </div>
        </div>
    )
}

export default HowItWork;