import React, { useState } from 'react';
import Image from 'next/future/image';

import { Button } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import useGetPokemons from '@/hooks/api/pokeapi/useGetPokemons';

import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

function PlaygroundPage() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data } = useGetPokemons(shouldFetch);
  return (
    <>
      <Seo title="Playground" />
      <section className="mt-20">
        <div className="layout flex-center min-h-screen flex-col text-center">
          <h1>Playground page</h1>
          <div className="mt-8 grid grid-cols-12 gap-2">
            {data?.map((pokemon) => (
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
                    alt=""
                    className="m-5 rounded-t-lg"
                  />
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {pokemon.name}
                      </h5>
                    </a>
                    <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                      Types:{' '}
                      {pokemon.types.map((type) => type.type.name).join(', ')}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button onClick={() => setShouldFetch(!shouldFetch)}>
              Get Pokemons
            </Button>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </section>
    </>
  );
}

PlaygroundPage.getLayout = getLayout;

export default PlaygroundPage;
