import { types } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Title from '../../components/Title';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Type Something Here',
  color: '#000',
};
