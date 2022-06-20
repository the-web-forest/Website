import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FaDonate } from 'react-icons/fa';
import CircleIcon from '../../components/CircleIcon';

export default {
  title: 'Components/Circle Icon',
  component: CircleIcon,
} as ComponentMeta<typeof CircleIcon>;

const Template: ComponentStory<typeof CircleIcon> = args => (
  <CircleIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  Icon: FaDonate,
  bgColor: '#58355E',
  circleSize: '56px',
  iconColor: '#fff',
  iconSize: 24,
};
