import React, { useState } from 'react';

import { Button } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import useGetPokemons from '@/hooks/api/pokeapi/useGetPokemons';

import PokemonCard from '@/components/card/PokemonCard';
import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

function PlaygroundPage() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data } = useGetPokemons(shouldFetch);

  return (
    <>
      <Seo title="Playground" />
      <section className="my-20">
        <div className="layout flex-center min-h-screen flex-col text-center">
          <h1>Playground page</h1>

          <div className="mt-8 grid grid-cols-12 gap-3">
            {data?.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
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
