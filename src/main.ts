import { Card } from './components/card';
import { Communication } from './components/communication';
import { List } from './components/list';
import { createCharacters } from './data/createCharacters';
import { Character } from './models/character';
import './style.css';

const charactersList = createCharacters();

new List('.app-container');
new Card('.characters-list');
charactersList.forEach((character) => {
  new Character(character);
});
new Communication('body');
