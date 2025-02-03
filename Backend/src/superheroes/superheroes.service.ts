import { Injectable } from '@nestjs/common';
import { Superhero } from './superheroes.model'; // Importar la misma clase

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  addSuperhero(hero: Superhero) {
    this.superheroes.push(hero);
  }

  getSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
