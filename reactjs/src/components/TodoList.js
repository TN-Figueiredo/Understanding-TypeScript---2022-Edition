"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../css/TodoList.css");
const TodoList = ({ items, onDeleteTodo }) => {
    return (<ul>
      {items.map((todo) => (<li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>))}
    </ul>);
};
exports.default = TodoList;
