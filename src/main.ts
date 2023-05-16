import './style.css';
import { createCharacters } from './data/createCharacters.ts';
import { createTemplate } from './template.ts';

const data = createCharacters();

let htmlList = '';

data.forEach((character) => {
  htmlList += createTemplate(character);
});

document.querySelector('.app')!.innerHTML = `

    <ul class="characters-list row list-unstyled">
      ${htmlList}
    </ul>`;

const handleDie = (element: HTMLButtonElement) => {
  data.find((item) => item.name === element.dataset.id)!.endLife();
};

const handleSpeak = (element: HTMLButtonElement) => {
  data.find((item) => item.name === element.dataset.id)!.saySentence();
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

const buttons =
  document.querySelectorAll<HTMLButtonElement>('.character__action');
buttons.forEach((button) => {
  button.addEventListener('click', handleButtons);
});
