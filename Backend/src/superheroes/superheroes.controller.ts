import { Body, Controller, Get, Post } from '@nestjs/common';
import { Superhero } from './superheroes.model';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly heroesService: SuperheroesService) {}

  @Post()
  addSuperhero(@Body() superhero: Superhero) {
    this.heroesService.addSuperhero(superhero);
    return { message: 'Superhero added successfully!' };
  }

  @Get()
  getSuperheroes(): Superhero[] {
    return this.heroesService.getSuperheroes();
  }
}
