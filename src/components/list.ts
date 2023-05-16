import { Component } from './component';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.element = generateTemplate();
    this.render();
  }

  generateTemplate() {
    return `
    <ul class="characters-list row list-unstyled"></ul>
    `;
  }
}
