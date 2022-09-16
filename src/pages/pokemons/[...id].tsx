import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { NamedAPIResource, Pokemon } from 'pokeapi-types';

import PokemonCard from '@/components/card/PokemonCard';
import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

function PokemonPage({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <Seo title="Pokemon" />
      <section>
        <div className="layout flex-center min-h-screen flex-col text-center">
          <PokemonCard pokemon={pokemon} />
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokemons = await res.json();

  const paths = pokemons.results.map((pokemon: NamedAPIResource) => ({
    params: { id: pokemon.url.split('/').slice(-2, -1) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.id}`);
  const pokemon = await res.json();
  return { props: { pokemon } };
};

PokemonPage.getLayout = getLayout;

export default PokemonPage;
