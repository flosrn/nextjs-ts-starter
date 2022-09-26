import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import useWithToast from '@/hooks/toast/useWithToast';

export type CardType = {
  cardIndex: number;
  id: number;
  name: string;
  image: string | null;
};

const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

const useGetMemoryCards = (shouldFetch: boolean) => {
  const { data, error } = useWithToast(
    useSWR<CardType[]>(
      shouldFetch ? [`/api/games/memory/get-cards`] : null,
      fetcher,
      options
    ),
    { runCondition: shouldFetch }
  );

  return {
    data,
    isLoading: !error && !data && shouldFetch,
    isError: error,
  };
};
export default useGetMemoryCards;
