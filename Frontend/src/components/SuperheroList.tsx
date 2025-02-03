import React from 'react';

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

interface SuperheroListProps {
  superheroes: Superhero[];
}

const SuperheroList: React.FC<SuperheroListProps> = ({ superheroes }) => {
  if (superheroes.length === 0) {
    return <p>No superheroes yet. Add one!</p>;
  }

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">Superhero List (Descending by Humility)</h4>
      <ul className="list-group">
        {superheroes.map((hero, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <strong>{hero.name}</strong>
            <span>
              {hero.superpower} — <em>{hero.humilityScore}/10</em>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperheroList;
