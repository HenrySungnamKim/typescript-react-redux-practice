import React from "react";

interface Props {
  text: string;
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}

const TodoItem: React.SFC<Props> = ({ text, done, onToggle, onRemove }) => {
  return (
    <div>
      <li>
        <b
          onClick={onToggle}
          style={{
            textDecoration: done ? "line-through" : "none"
          }}
        >
          {text}
        </b>
        <button
          style={{ all: "unset", marginLeft: "0.5rem" }}
          onClick={onRemove}
        >
          [Remove]
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
