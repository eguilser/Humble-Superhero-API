import { Superhero } from './superheroes.model';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should return superheroes sorted by humility score', () => {
    const hero1: Superhero = {
      name: 'Hero1',
      superpower: 'Fly',
      humilityScore: 5,
    };

    const hero2: Superhero = {
      name: 'Hero2',
      superpower: 'Invisibility',
      humilityScore: 8,
    };

    service.addSuperhero(hero1);
    service.addSuperhero(hero2);

    const heroes: Superhero[] = service.getSuperheroes();
    expect(heroes[0].humilityScore).toBe(8);
  });
});
