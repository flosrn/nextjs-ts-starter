import { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
import { NamedAPIResource, Pokemon } from 'pokeapi-types';

import randomUniqueNum from '@/utils/randomUniqueNum';
import shuffleArray from '@/utils/shuffleArray';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemon(url: string) {
  const response = await axios.get(url);
  return response.data;
}

const formatData = (pokemons: Pokemon[]) => {
  const formattedData = pokemons.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
  }));

  return shuffleArray(formattedData).map((card, index) => ({
    ...card,
    cardIndex: index,
  }));
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const promisesArray: Promise<NamedAPIResource>[] = [];
      const randomNums = randomUniqueNum(121, 4);
      randomNums.map((num) =>
        promisesArray.push(getPokemon(`${POKE_API_URL}/${num}`))
      );
      const results = await Promise.all(promisesArray);
      const duplicateResults = [...results, ...results] as unknown as Pokemon[];
      const formattedData = formatData(duplicateResults);
      res.status(200).json(formattedData);
    } else {
      res.status(405).json({ statusCode: 405, message: 'Method Not Allowed' });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚨 Error', error);
    res.status(500).json(error || 'Internal Server Error');
  }
}
