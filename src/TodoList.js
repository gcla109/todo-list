import { html, css, LitElement } from 'lit-element';

export class TodoList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--todo-list-text-color, #000);
      }
      .title {
        background-color: #80bfb3;
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      h1 {
        font-size: 3em;
        color: #292929;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'To Do List';
  }

  render() {
    return html`
      <div class="title">
        <h1>${this.title}</h1>
      </div>
      <todo-items></todo-items>
    `;
  }
}
