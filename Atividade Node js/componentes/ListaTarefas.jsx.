import React, { useState } from "react";
import ItemTarefa from "./ItemTarefa";

export default function ListaTarefas({ tarefas }) {
  const [lista, setLista] = useState(tarefas);
  const [novoTexto, setNovoTexto] = useState("");

  function adicionar() {
    if (!novoTexto.trim()) return;
    const novo = { id: Date.now(), texto: novoTexto };
    setLista([novo, ...lista]);
    setNovoTexto("");
  }

  function remover(id) {
    setLista(lista.filter(t => t.id !== id));
  }

  return (
    <section className="lista">
      <h2>Tarefas</h2>
      <div className="input-row">
        <input
          value={novoTexto}
          onChange={(e) => setNovoTexto(e.target.value)}
          placeholder="Nova tarefa..."
        />
        <button onClick={adicionar}>Adicionar</button>
      </div>

      <ul>
        {lista.map(t => (
          <ItemTarefa key={t.id} tarefa={t} onRemover={() => remover(t.id)} />
        ))}
      </ul>
    </section>
  );
}
