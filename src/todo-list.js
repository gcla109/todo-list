import { TodoList } from './TodoList.js';
import { TodoItems } from './TodoItems.js';
import { ItemCard } from './ItemCard.js';

window.customElements.define('todo-list', TodoList);
window.customElements.define('todo-items', TodoItems);
window.customElements.define('item-card', ItemCard);