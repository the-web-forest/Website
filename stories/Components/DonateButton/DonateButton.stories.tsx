import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DonateButton from '../../../components/DonateButton'

export default {
    title: 'Components/DonateButton',
    component: DonateButton,
  } as ComponentMeta<typeof DonateButton>;

const Template: ComponentStory<typeof DonateButton> = (args) => <DonateButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Botão de Teste'
};

