import Title from '../../components/Title';
import styles from './styles.module.css';
import { FaShareAlt, FaDonate, FaTree } from 'react-icons/fa';
import CircleIcon from '../../components/CircleIcon';
import { IconType } from 'react-icons';
import Topic from '../../components/Topic';

interface TopicIconProp {
  Icon: IconType;
}

const makeDonationTitle = <span>Faça uma doação online de qualquer valor</span>;
const growTreeTitle = (
  <span>Utilizaremos o valor para plantar árvores reais</span>
);
const shareTitle = (
  <span>Acompanhe e compartilhe suas ações na Web Forest</span>
);
const DESCRIPTIONS = {
  ONE: 'Sua doação é feita digitalmente e pode ser de qualquer valor.',
  TWO: 'Utilizamos os recursos arrecadados para financiar plantação de árvores reais e instituições ambientais.',
  THREE:
    'Compartilhe suas ações na Web Forest e estimule seus amigos e empresas a apoiar nosso projeto sem fins lucrativos.',
};

const TopicIcon = ({ Icon }: TopicIconProp) => (
  <CircleIcon
    Icon={Icon}
    bgColor="#58355E"
    circleSize="56px"
    iconColor="#fff"
    iconSize={24}
  />
);

interface TopicInterface {
  icon: JSX.Element;
  title: string;
  description: string;
}

const topics: Array<TopicInterface> = [
  {
    icon: <TopicIcon Icon={FaDonate} />,
    title: 'Faça uma doação online de qualquer valor',
    description:
      'Sua doação é feita digitalmente e pode ser de qualquer valor.',
  },
  {
    icon: <TopicIcon Icon={FaTree} />,
    title: 'Utilizaremos o valor para plantar árvores reais',
    description:
      'Utilizamos os recursos arrecadados para financiar plantação de árvores reais e instituições ambientais.',
  },
  {
    icon: <TopicIcon Icon={FaShareAlt} />,
    title: 'Acompanhe e compartilhe suas ações na Web Forest',
    description:
      'Compartilhe suas ações na Web Forest e estimule seus amigos e empresas a apoiar nosso projeto sem fins lucrativos.',
  },
];

const HowItWork = () => {
  return (
    <div className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.howItWorksInner}>
          <Title text="Como a Web Forest funciona?" color="#4C4C4C" as="h2" />
          <ul className={styles.howItWorksTopics}>
            {topics.map((topic: TopicInterface) => {
              return (
                <Topic
                  Icon={topic.icon}
                  Title={topic.title}
                  description={topic.description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
