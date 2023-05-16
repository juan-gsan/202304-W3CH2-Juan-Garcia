import { Component } from './component';

export class Communication extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.generateTemplate();
    this.render();
  }

  generateTemplate() {
    return `
    <div class="comunications">
    <p class="comunications__text display-1">Una frase que dice alguien</p>
    <img class="comunications__picture" src="img/no-one.jpg" alt="Nombre y familia del que habla" />
  </div>
    `;
  }
}
