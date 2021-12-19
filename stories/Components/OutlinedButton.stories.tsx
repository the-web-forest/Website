import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OutlinedButton from '../../components/OutlinedButton';

export default {
    title: 'Components/Outlined Button',
    component: OutlinedButton,
  } as ComponentMeta<typeof OutlinedButton>;

const Template: ComponentStory<typeof OutlinedButton> = (args) => <OutlinedButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Login',
  type: 'link',
  target: '_self',
  url: 'https://www.webforest.eco'
};

Default.argTypes = {
    clickHandler : {
        action : 'Click Handler'
    }
}
