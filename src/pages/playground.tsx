import React, { useEffect, useState } from 'react';

import { Button } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import useGetPokemons, {
  PokemonCardType,
} from '@/hooks/api/pokeapi/useGetPokemons';

import PokemonCard from '@/components/card/PokemonCard';
import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

function PlaygroundPage() {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [cardPair, setCardPair] = useState<PokemonCardType[]>([]);
  const [switchedCards, setSwitchedCards] = useState<PokemonCardType[]>([]);
  const { data } = useGetPokemons(shouldFetch);

  const switchCard = (pokemon: PokemonCardType) =>
    setCardPair([...cardPair, pokemon]);

  useEffect(() => {
    if (cardPair.length === 2) {
      if (cardPair[0].id === cardPair[1].id) {
        setSwitchedCards((prev) => [...prev, ...cardPair]);
      }
      setTimeout(() => {
        setCardPair([]);
      }, 700);
    }
  }, [cardPair]);

  return (
    <>
      <Seo title="Playground" />
      <section className="my-20">
        <div className="layout flex-center min-h-screen flex-col text-center">
          <h1>Playground page</h1>

          <div className="mt-8 grid grid-cols-12 gap-3">
            {data?.map((pokemon, index) => (
              <PokemonCard
                key={index}
                pokemon={pokemon}
                cardPair={cardPair}
                switchedCards={switchedCards}
                switchCardHandler={switchCard}
              />
            ))}
          </div>

          <div className="mt-8">
            <Button onClick={() => setShouldFetch(!shouldFetch)}>
              Get Pokemons
            </Button>
          </div>
        </div>
        <Toaster position="bottom-right" />
      </section>
    </>
  );
}

PlaygroundPage.getLayout = getLayout;

export default PlaygroundPage;
