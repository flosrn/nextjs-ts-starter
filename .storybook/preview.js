import React from 'react';
import NextImage from 'next/image';

import '../src/styles/globals.css';
import '../src/styles/colors.css';
import cx from 'classnames';

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
  (Story, context) => {
    const isCentered = context.parameters.isCentered;
    return (
      <div
        className={cx('bg-tw-background text-tw-primary p-3 h-screen', {
          'flex justify-center items-center': isCentered,
        })}
      >
        <Story />
      </div>
    );
  },
];
