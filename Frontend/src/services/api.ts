import axios from 'axios';

const API_URL = 'http://127.0.0.1:4000/superheroes';

export const getSuperheroes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addSuperhero = async (superhero: { name: string; superpower: string; humilityScore: number }) => {
  await axios.post(API_URL, superhero);
};
