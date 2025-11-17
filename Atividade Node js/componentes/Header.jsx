import React from "react";

export default function Header({ titulo, aluno }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <p>Aluno: {aluno}</p>
    </header>
  );
}
