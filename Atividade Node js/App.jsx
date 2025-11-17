// App.jsx
import React from 'react';
import Header from './componentes/Header'; // Caminho de importação CORRETO
import ListaTarefas from './componentes/ListaTarefas';
import Contador from './componentes/Contador';

// Dados iniciais (podem ser movidos)
const tarefasIniciais = [
  { id: 1, texto: "Estudar React" },
  { id: 2, texto: "Fazer Projeto" }
];

export default function App() {
  return (
    <div className="app"> 
      <Header 
        titulo="Minha Lista de Tarefas" 
        aluno="Seu Nome" 
      />
      <hr />
      <ListaTarefas tarefas={tarefasIniciais} />
      <hr />
      <Contador />
    </div>
  );
}