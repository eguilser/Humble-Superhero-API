import React, { useState } from 'react';

interface SuperheroFormProps {
  onAddSuperhero: (name: string, superpower: string, humilityScore: number) => void;
}

const SuperheroForm: React.FC<SuperheroFormProps> = ({ onAddSuperhero }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !superpower) {
      alert('Please fill out all fields');
      return;
    }
    onAddSuperhero(name, superpower, humilityScore);
    setName('');
    setSuperpower('');
    setHumilityScore(1);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
      <h4 className="mb-3">Add Superhero</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Spider-Man"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Superpower</label>
        <input
          type="text"
          className="form-control"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          placeholder="e.g. Wall-Crawling"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Humility Score (1-10)</label>
        <input
          type="number"
          min="1"
          max="10"
          className="form-control"
          value={humilityScore}
          onChange={(e) => setHumilityScore(+e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add Superhero
      </button>
    </form>
  );
};

export default SuperheroForm;
