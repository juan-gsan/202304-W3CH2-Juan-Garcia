import { Character } from './character.ts';
import { Fighter } from './fighter.ts';
import { King } from './king.ts';
import { Squire } from './squire.ts';

export class Counselor extends Character {
  characterAdvised;

  constructor(
    name: string,
    house: string,
    age: number,
    emoji: string,
    characterAdvised: King | Fighter | Counselor | Squire
  ) {
    super(name, house, age, emoji);
    this.characterAdvised = characterAdvised;
    this.communicate = "I think I'll be dying soon";
  }
}
