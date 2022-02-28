import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FaDonate } from 'react-icons/fa';
import Topic from '../../components/Topic';
import CircleIcon from '../../components/CircleIcon';
import { IconType } from 'react-icons';

interface TopicIconProp {
    Icon: IconType
}

const TopicIcon = ({ Icon }: TopicIconProp) => <CircleIcon
                                                    Icon={Icon} 
                                                    bgColor='#58355E' 
                                                    circleSize='56px' 
                                                    iconColor='#fff' 
                                                    iconSize={24}  
                                                />


export default {
    title: 'Components/Topic',
    component: Topic,
} as ComponentMeta<typeof Topic>;

const Template: ComponentStory<typeof Topic> = (args) => <Topic {...args} />;

export const Default = Template.bind({});

Default.args = {
    Icon: <TopicIcon Icon={FaDonate} />,
    Title: 'Lorem Ipsum',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni'
}