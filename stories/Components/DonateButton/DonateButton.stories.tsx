import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DonateButton from '../../../components/DonateButton'

export default {
    title: 'Components/Donate Button',
    component: DonateButton,
  } as ComponentMeta<typeof DonateButton>;

const Template: ComponentStory<typeof DonateButton> = (args) => <DonateButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Make a Donation',
  target: '_blank',
  url: 'https://www.webforest.eco'
};

Default.argTypes = {
  target: {
    options: ['_blank', '_self'],
    control: { type: 'select' },
  }
}

