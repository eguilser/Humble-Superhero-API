import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { Superhero } from './superheroes.model';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should return superheroes sorted by humility score', () => {
    const mockSuperheroes: Superhero[] = [
      {
        name: 'Hero2',
        superpower: 'Invisibility',
        humilityScore: 8,
      },
      {
        name: 'Hero1',
        superpower: 'Fly',
        humilityScore: 5,
      },
    ];

    jest.spyOn(service, 'getSuperheroes').mockReturnValue(mockSuperheroes);

    const superheroes: Superhero[] = controller.getSuperheroes();
    expect(superheroes[0].humilityScore).toBe(8);
    expect(superheroes[1].humilityScore).toBe(5);
  });
});
