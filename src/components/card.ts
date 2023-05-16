import { createCharacters } from '../data/createCharacters';
import { Component } from './component';

export class Card extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.generateTemplate();
    this.render();
  }

  generateTemplate(character: AllCharacters) {
    return `
    <li class="character col">
        <div class="card character__card">
          <img src="./img/${character.name.toLowerCase()}.jpg" alt="${
      character.name
    } ${character.house}" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${character.name} ${
      character.house
    }</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${character.age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                
              </ul>
              <div class="character__actions">
                <button data-id="${
                  character.name
                }" class="character__action btn speak">habla</button>
                <button data-id="${
                  character.name
                }" class="character__action btn die">muere</button>
              </div>
            </div>
          </div>
          <i class="${character.emoji}"></i>
        </div>
      </li>
    `;
  }
}
