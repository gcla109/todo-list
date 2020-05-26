import { html, css, LitElement } from 'lit-element';

export class TodoItems extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        width: 80%;
        padding: 50px 0 25px 0;
      }
      .form-control {
        margin-right: 10px;
      }
      .form-group {
        display: flex;
      }
      button {
        max-height: 38px;
      }
    `;
  }

  static get properties() {
    return {
      todos: { type: Array }
    }
  }

  constructor() {
    super();

    this.todos = [];
  }

  render() {
    return html`
      <link rel="stylesheet" href="../css/bootstrap.min.css">
      <div class="form-group">
        <input type="text" class="form-control" id="description" placeholder="Add a new task" required>
        <button class="btn btn-outline-dark" @click=${this.__addTodo}>
        <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
          <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
        </svg>
        </button>
      </div>
      <div class="todos-container">
        ${this.todos.map((todo) => html`
          <item-card .todo=${todo}>
            <button class="btn btn-outline-success" data-id=${todo.id} @click=${this.__completedTodo}>
            <svg class="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
            </svg>
            </button>
          </item-card>
        `)}
      </div>
    `;
  }

  __addTodo() {
    const task = this.shadowRoot.getElementById('description');
    const id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;

    if (!task.value) {
      task.style.border = '1px solid maroon';

      return false;
    }

    this.todos = [...this.todos,
    {
      id,
      description: task.value
    }];

    task.value = '';
  }

  __completedTodo(event) {
    const id = event.target.getAttribute('data-id');

    if (id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
    }
  }

  updated() {
    const input = this.shadowRoot.getElementById('description');

    input.style.border = '';
  }

}