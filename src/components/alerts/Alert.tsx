import React from 'react';

import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import cx from 'classnames';

export enum AlertType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export type AlertWithAccentBorderProps = {
  /** Alert children element */
  children: React.ReactNode;
  /** The alert's type */
  type: AlertType;
  /** If the alert has an accent border */
  hasAccentBorder?: boolean;
};

const Alert: React.FC<AlertWithAccentBorderProps> = ({
  children,
  type,
  hasAccentBorder,
}) => {
  const isSuccess = type === AlertType.SUCCESS;
  const isWarning = type === AlertType.WARNING;
  const isError = type === AlertType.ERROR;
  const isInfo = type === AlertType.INFO;
  return (
    <div
      className={cx('p-4', {
        'bg-green-50 border-green-400': isSuccess,
        'bg-yellow-50 border-yellow-400': isWarning,
        'bg-red-50 border-red-400': isError,
        'bg-blue-50 border-blue-400': isInfo,
        'border-l-4': hasAccentBorder,
      })}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {isSuccess && (
            <CheckCircleIcon
              className="w-5 h-5 text-green-400"
              aria-hidden="true"
            />
          )}
          {isWarning && (
            <ExclamationIcon
              className="w-5 h-5 text-yellow-400"
              aria-hidden="true"
            />
          )}
          {isError && (
            <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
          )}
          {isInfo && (
            <InformationCircleIcon
              className="w-5 h-5 text-blue-400"
              aria-hidden="true"
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Alert;
