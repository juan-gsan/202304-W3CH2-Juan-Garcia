import { Card } from './components/card';
import { Communication } from './components/communication';
import { List } from './components/list';
import { createCharacters } from './data/createCharacters';
import './style.css';

const charactersList = createCharacters();

new List('.app-container');

charactersList.forEach((character) => {
  new Card('.characters-list', character);
});

new Communication('body');
