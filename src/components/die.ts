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
      <li data-id="${character.name}" class="symbol-thumb">
        Estado:
        <i class="fas fa-thumbs-down"></i>
      </li>
    `;
  }
}
