import React from "react";
import TodoItem from "./TodoItem";

interface Props {}

interface TodoItemState {
  id: number;
  text: string;
  done: boolean;
}

interface State {
  input: string;
  todoItems: TodoItemState[];
}

class TodoList extends React.Component<Props, State> {
  //Initialize
  nextTodoId: number = 0;
  state: State = {
    input: "",
    todoItems: []
  };
  onToggle = (id: number): void => {
    const { todoItems } = this.state;
    const nextTodoItems: TodoItemState[] = todoItems.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({
      todoItems: nextTodoItems
    });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { todoItems, input } = this.state;
    const newItem: TodoItemState = {
      id: this.nextTodoId++,
      text: input,
      done: false
    };
    const nextTodoItems: TodoItemState[] = todoItems.concat(newItem);
    this.setState({
      input: "",
      todoItems: nextTodoItems
    });
  };

  onRemove = (id: number): void => {
    const { todoItems } = this.state;
    const nextTodoItems: TodoItemState[] = todoItems.filter(
      item => item.id !== id
    );
    this.setState({
      todoItems: nextTodoItems
    });
  };

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    this.setState({
      input: value
    });
  };
  render() {
    const { onSubmit, onChange, onToggle, onRemove } = this;
    const { input, todoItems } = this.state;

    const todoItemList: React.ReactElement[] = todoItems.map(item => (
      <TodoItem
        key={item.id}
        done={item.done}
        onToggle={() => onToggle(item.id)}
        onRemove={() => onRemove(item.id)}
        text={item.text}
      />
    ));
    return (
      <div>
        <h1>오늘 할 일</h1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={input} />
          <button type="submit">할일 추가</button>
        </form>
        <ul>{todoItemList}</ul>
      </div>
    );
  }
}
export default TodoList;
