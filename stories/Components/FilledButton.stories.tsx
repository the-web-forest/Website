import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilledButton from '../../components/FilledButton';

export default {
  title: 'Components/Filled Button',
  component: FilledButton,
} as ComponentMeta<typeof FilledButton>;

const Template: ComponentStory<typeof FilledButton> = args => (
  <FilledButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'Make a Donation',
  target: '_blank',
  url: 'https://www.webforest.eco',
};

Default.argTypes = {
  target: {
    options: ['_blank', '_self'],
    control: { type: 'select' },
  },
};
