import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import useWithToast from '@/hooks/toast/useWithToast';

export type PokemonCardType = {
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

const useGetPokemons = (shouldFetch: boolean) => {
  const { data, error } = useWithToast(
    useSWR<PokemonCardType[]>(
      shouldFetch ? [`/api/pokeapi/get-pokemons`] : null,
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
export default useGetPokemons;
