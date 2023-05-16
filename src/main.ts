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

const handleDie = (element: HTMLButtonElement) => {
  charactersList.find((item) => item.name === element.dataset.id)!.endLife();
};

const handleSpeak = (element: HTMLButtonElement) => {
  charactersList
    .find((item) => item.name === element.dataset.id)!
    .saySentence();
};

const handleButtons = (event: Event) => {
  const element = event.target as HTMLButtonElement;
  if (element.classList.contains('die')) {
    handleDie(element);
  }

  if (element.classList.contains('speak')) {
    handleSpeak(element);
  }
};

const buttons = document.querySelectorAll<HTMLButtonElement>('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', handleButtons);
});
