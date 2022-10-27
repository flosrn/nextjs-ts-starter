import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Button } from 'flowbite-react';
import { Pokemon } from 'pokeapi-types';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div
      key={pokemon.id}
      className="col-span-12 h-[336px] sm:col-span-6 md:col-span-4 lg:col-span-3"
    >
      <div className="flex-center max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <Image
          src={pokemon.sprites.other.dream_world.front_default || ''}
          width={150}
          height={150}
          style={{ maxWidth: '100%', height: '150px' }}
          alt={pokemon.name}
          className="m-5 rounded-t-lg"
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {pokemon.name}
            </h5>
          </a>
          <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
            Types: {pokemon.types.map((type) => type.type.name).join(', ')}
          </p>
          <Link href="/pokemons/[...id]" as={`/pokemons/${pokemon.id}`}>
            <Button size="sm">
              Read more
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
