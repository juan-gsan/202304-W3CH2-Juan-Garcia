import { AllCharacters } from '../types/allCharacters';
import { Component } from './component';

export class Communication extends Component {
  constructor(selector: string, character: AllCharacters) {
    super(selector);
    this.template = this.generateTemplate(character);
    this.render();
  }

  generateTemplate(character: AllCharacters) {
    return `
    <div class="comunications">
    <p class="comunications__text display-1">${character.communicate}</p>
    <img class="comunications__picture" src="img/${character.name.toLowerCase()}.jpg" alt="${
      character.name
    } ${character.house}" />
  </div>
    `;
  }
}
