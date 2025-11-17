import React from "react";
import Header from "./components/Header";
import ListaTarefas from "./components/ListaTarefas";
import Contador from "./components/Contador";
import "./index.css";

export default function App() {
  const tarefasIniciais = [
    { id: 1, texto: "Ler enunciado" },
    { id: 2, texto: "Criar componentes" },
    { id: 3, texto: "Testar app" },
  ];

  return (
    <div className="app">
      <Header titulo="A07 - Introdução ao React" aluno="Seu Nome" />
      <main>
        <ListaTarefas tarefas={tarefasIniciais} />
        <Contador />
      </main>
    </div>
  );
}
