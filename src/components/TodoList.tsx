import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemDataParams } from "../store/modules/todos";

interface Props {
  input: string;
  todoItems: TodoItemDataParams[];
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onChange(e: any): void;
}

const TodoList: React.SFC<Props> = ({
  input,
  todoItems,
  onCreate,
  onRemove,
  onToggle,
  onChange
}) => {
  const todoItemList = todoItems.map(todo =>
    todo ? (
      <TodoItem
        key={todo.id}
        done={todo.done}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        text={todo.text}
      />
    ) : null
  );

  return (
    <div>
      <h1>What to do</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLElement>) => {
          e.preventDefault();
          onCreate();
        }}
      >
        <input onChange={onChange} value={input} />
        <button type="submit">add a Todo</button>
      </form>
      <ul>{todoItemList}</ul>
    </div>
  );
};

export default TodoList;
