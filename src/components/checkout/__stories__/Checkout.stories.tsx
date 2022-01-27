import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Checkout from '@/components/checkout/Checkout';

const Template: ComponentStory<typeof Checkout> = (args) => (
  <Checkout {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export default {
  title: 'Components/Checkout/Checkout',
  component: Checkout,
  argTypes: {},
} as ComponentMeta<typeof Checkout>;
