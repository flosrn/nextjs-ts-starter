import React from 'react';

import { XIcon } from '@heroicons/react/solid';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Alert, { AlertType } from '@/components/alerts/Alert';

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const SuccessWithActions = Template.bind({});
export const WarningWithDescription = Template.bind({});
export const ErrorWithList = Template.bind({});
export const InfoWithLinkOnRight = Template.bind({});
export const WarningWithAccentBorder = Template.bind({});
export const SuccessWithDismissButton = Template.bind({});

SuccessWithActions.args = {
  children: (
    <div className="ml-3">
      <h3 className="text-sm font-medium text-green-800">Order completed</h3>
      <div className="mt-2 text-sm text-green-700">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </p>
      </div>
      <div className="mt-4">
        <div className="flex -mx-2 -my-1.5">
          <button
            type="button"
            className="px-2 py-1.5 text-sm font-medium text-green-800 bg-green-50 rounded-md hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-none"
          >
            View status
          </button>
          <button
            type="button"
            className="px-2 py-1.5 ml-3 text-sm font-medium text-green-800 bg-green-50 rounded-md hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-none"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  ),
  type: AlertType.SUCCESS,
};

WarningWithDescription.args = {
  children: (
    <div className="ml-3">
      <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
      <div className="mt-2 text-sm text-yellow-700">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </p>
      </div>
    </div>
  ),
  type: AlertType.WARNING,
};

ErrorWithList.args = {
  children: (
    <div className="ml-3">
      <h3 className="text-sm font-medium text-red-800">
        There were 2 errors with your submission
      </h3>
      <div className="mt-2 text-sm text-red-700">
        <ul role="list" className="pl-5 space-y-1 list-disc">
          <li>Your password must be at least 8 characters</li>
          <li>
            Your password must include at least one pro wrestling finishing move
          </li>
        </ul>
      </div>
    </div>
  ),
  type: AlertType.ERROR,
};

InfoWithLinkOnRight.args = {
  children: (
    <div className="flex-1 ml-3 md:flex md:justify-between">
      <p className="text-sm text-blue-700">
        A new software update is available. See what’s new in version 2.0.4.
      </p>
      <p className="mt-3 text-sm md:mt-0 md:ml-6">
        <a
          href="#"
          className="font-medium text-blue-700 whitespace-nowrap hover:text-blue-600"
        >
          Details <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  ),
  type: AlertType.INFO,
};

WarningWithAccentBorder.args = {
  children: (
    <p className="text-sm text-yellow-700">
      You have no credits left.{' '}
      <a
        href="#"
        className="font-medium text-yellow-700 underline hover:text-yellow-600"
      >
        Upgrade your account to add more credits.
      </a>
    </p>
  ),
  type: AlertType.WARNING,
  hasAccentBorder: true,
};

SuccessWithDismissButton.args = {
  children: (
    <>
      <div className="ml-3">
        <p className="text-sm font-medium text-green-800">
          Successfully uploaded
        </p>
      </div>
      <div className="pl-3 ml-auto">
        <div className="-mx-1.5 -my-1.5">
          <button
            type="button"
            className="inline-flex p-1.5 text-green-500 bg-green-50 rounded-md hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-none"
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  ),
  type: AlertType.SUCCESS,
};

export default {
  title: 'Components/Alerts/Alert',
  component: Alert,
  parameters: {
    isCentered: true,
  },
} as ComponentMeta<typeof Alert>;
