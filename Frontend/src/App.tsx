import React, { useEffect, useState } from 'react';
import SuperheroForm from './components/SuperheroForm.tsx';
import SuperheroList from './components/SuperheroList.tsx';
import { addSuperhero, getSuperheroes } from './services/api.ts';

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

const App: React.FC = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    const data = await getSuperheroes();
    setSuperheroes(data);
  };

  const handleAddSuperhero = async (name: string, superpower: string, humilityScore: number) => {
    await addSuperhero({ name, superpower, humilityScore });
    fetchSuperheroes();
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Humble Superhero API</h1>
      <div className="row">
        <div className="col-md-4">
          <SuperheroForm onAddSuperhero={handleAddSuperhero} />
        </div>
        <div className="col-md-8">
          <SuperheroList superheroes={superheroes} />
        </div>
      </div>
    </div>
  );
};

export default App;
