import React from 'react';
import NextImage from 'next/image';

import '../src/styles/globals.css';
import '../src/styles/colors.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  theme: {
    selector: 'html',
    dataAttr: 'data-theme',
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <div className='bg-tw-background text-tw-primary p-3 h-screen'>
      <Story />
    </div>
  ),
];
