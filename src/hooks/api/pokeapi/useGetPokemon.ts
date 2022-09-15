import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import useWithToast from '@/hooks/toast/useWithToast';

const useGetPokeList = (shouldFetch: boolean) => {
  const { data, error } = useWithToast(
    useSWR(shouldFetch ? [`/api/pokeapi/get-poke-list`] : null, fetcher),
    { runCondition: shouldFetch }
  );

  return {
    data,
    isLoading: !error && !data && shouldFetch,
    isError: error,
  };
};

export default useGetPokeList;
