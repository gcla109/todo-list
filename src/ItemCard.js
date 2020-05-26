import { html, css, LitElement } from 'lit-element';

export class ItemCard extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: 10px;
      }
      .card-container {
        display: flex;
        border: 1px solid #d4d4d4;
        align-items: center;
        border-radius: 5px;
        background: white;
        padding: 25px;
      }
      ::slotted {
        justify-content: flex-end;
      }
      p {
        flex: 1;
        margin: 0;
      }
    `;
  }

  static get properties() {
    return {
      todo: { type: Object }
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="card-container">
        <p>${this.todo.description}</p>
        <slot></slot>
      </div>
    `;
  }
}
