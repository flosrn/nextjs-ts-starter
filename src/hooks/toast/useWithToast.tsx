import { useEffect, useRef } from 'react';

import { SWRResponse } from 'swr';
import toast from 'react-hot-toast';

import useLoadingToast from './useLoadingToast';

export const defaultToastMessage = {
  loading: 'Loading...',
  success: 'Data fetched successfully',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (err: any) =>
    err?.response?.data?.msg + '' ?? 'Something is wrong, please try again',
};

type OptionType = {
  runCondition?: boolean;
  loading?: string;
  success?: string;
  error?: string;
};

export default function useWithToast<T, E>(
  swr: SWRResponse<T, E>,
  { runCondition = true, ...customMessages }: OptionType = {}
) {
  const { data, error } = swr;

  const toastStatus = useRef<string>(data ? 'done' : 'idle');

  const toastMessage = {
    ...defaultToastMessage,
    ...customMessages,
  };

  useEffect(() => {
    if (!runCondition) return;

    // if toastStatus is done,
    // then it is not the first render or the data is already cached
    if (toastStatus.current === 'done') return;

    if (error) {
      toast.error(toastMessage.error, { id: toastStatus.current });
      toastStatus.current = 'done';
    } else if (data) {
      toast.success(toastMessage.success, { id: toastStatus.current });
      toastStatus.current = 'done';
    } else {
      toastStatus.current = toast.loading(toastMessage.loading);
    }

    return () => {
      toast.dismiss(toastStatus.current);
    };
  }, [
    data,
    error,
    runCondition,
    toastMessage.error,
    toastMessage.loading,
    toastMessage.success,
  ]);

  return { ...swr, isLoading: useLoadingToast() };
}
