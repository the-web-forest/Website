import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderButton from '../../../components/HeaderButton';

export default {
    title: 'Components/Header Button',
    component: HeaderButton,
  } as ComponentMeta<typeof HeaderButton>;

const Template: ComponentStory<typeof HeaderButton> = (args) => <HeaderButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Quem somos',
  selected: false,
  target: '_self',
  url: 'https://www.webforest.eco'
};

export const Selected = Default.bind({});

Selected.args = {
  text: 'Quem somos',
  selected: true,
  target: '_self',
  url: 'https://www.webforest.eco'
};

