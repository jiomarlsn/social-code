import { Button, FormLabel, FormControl } from "react-bootstrap";
import { useState } from "react";

const Todo = (props) => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  const onAddTodo = () => {
    setTodos([...todos, name]);

    setName("");
  };

  return (
    <div className="container mt-4">
      <h1>{props.title}</h1>

      {props.children}

      <div className="mb-3">
        <FormLabel>O que gostaria de fazer hoje ?</FormLabel>
        <FormControl
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          value={name}
        />
        <Button
          className="mt-2"
          disabled={name.trim().length <= 3}
          onClick={() => onAddTodo()}
        >
          Adicionar Tarefa
        </Button>
      </div>

      <ul>
        {todos.map((todo, index) => {
          return <li key={index}> {todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
