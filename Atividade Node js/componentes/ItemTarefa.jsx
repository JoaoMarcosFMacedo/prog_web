import React from "react";

export default function ItemTarefa({ tarefa, onRemover }) {
  return (
    <li className="item">
      <span>{tarefa.texto}</span>
      <button onClick={onRemover}>Remover</button>
    </li>
  );
}
