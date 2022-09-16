import { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
import { NamedAPIResource } from 'pokeapi-types';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemon(url: string) {
  const response = await axios.get(url);
  return response.data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const jsonData = await getPokemon(POKE_API_URL);
      const promisesArray = await jsonData.results.map(
        (result: NamedAPIResource) => getPokemon(result.url)
      );
      const results = await Promise.all(promisesArray);
      res.status(200).json(results);
    } else {
      res.status(405).json({ statusCode: 405, message: 'Method Not Allowed' });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚨 Error', error);
    res.status(500).json(error || 'Internal Server Error');
  }
}
