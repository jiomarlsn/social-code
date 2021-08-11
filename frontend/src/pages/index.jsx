import React from "react";
import { Alert } from "react-bootstrap";
import Todo from "../components/todo/Todo";

const Homepage = () => {
  return (
    <div>
      <Todo title="Lista de atividades - Segunda">
        <Alert variant="success">
          Não esqueça de informar suas atividades, aqui!
        </Alert>
      </Todo>
      <Todo title="Lista de atividades - Terça">
        <Alert variant="warning">
          Não esqueça de informar suas atividades, aqui!
        </Alert>
      </Todo>
      <Todo title="Lista de atividades - Quarta">
        <Alert variant="danger">
          Não esqueça de informar suas atividades, aqui!
        </Alert>
      </Todo>
    </div>
  );
};

export default Homepage;
