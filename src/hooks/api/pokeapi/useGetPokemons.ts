import { Pokemon } from 'pokeapi-types';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import useWithToast from '@/hooks/toast/useWithToast';

const useGetPokemons = (shouldFetch: boolean) => {
  const { data, error } = useWithToast(
    useSWR<Pokemon[]>(
      shouldFetch ? [`/api/pokeapi/get-pokemons`] : null,
      fetcher
    ),
    { runCondition: shouldFetch }
  );

  return {
    data,
    isLoading: !error && !data && shouldFetch,
    isError: error,
  };
};
export default useGetPokemons;
