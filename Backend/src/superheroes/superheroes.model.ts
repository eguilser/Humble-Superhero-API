import { IsInt, IsString, Max, Min } from 'class-validator';

export class Superhero {
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
