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
const description1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."

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
                description={description1}
                />
                <Topic Icon={<TopicIcon Icon={FaTree} />} 
                Title={growTreeTitle}
                description={description1}
                />
                <Topic Icon={<TopicIcon Icon={FaShareAlt} />} 
                Title={shareTitle}
                description={description1}
                />
            </div>
        </div>
    )
}

export default HowItWork;