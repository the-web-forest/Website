import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SocialMediaIcon from '../../components/SocialMediaIcon';

export default {
  title: 'Components/Social Media Icon',
  component: SocialMediaIcon,
} as ComponentMeta<typeof SocialMediaIcon>;

const Template: ComponentStory<typeof SocialMediaIcon> = args => (
  <SocialMediaIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Facebook',
  type: 'facebook',
  url: 'https://facebook.com.br',
};
