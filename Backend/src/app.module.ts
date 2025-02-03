import { Module } from '@nestjs/common';
import { SuperheroesModule } from './superheroes/superheroes.module';

@Module({
  imports: [SuperheroesModule],
})
export class AppModule {}
