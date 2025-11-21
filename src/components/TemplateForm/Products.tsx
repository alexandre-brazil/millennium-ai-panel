"use client";
import { useState, useEffect } from "react";
import { Produto } from "@/types/templates";

type Step4Props = {
  data: Produto[];
  onChange: (data: Produto[]) => void;
};

export default function Products({ data, onChange }: Step4Props) {
  const [produtos, setProdutos] = useState<Produto[]>(data);

  useEffect(() => {
    onChange(produtos);
  }, [produtos]);

  const addProduto = () => {
    setProdutos((prev) => [...prev, { nome: "", preco: "", armazenamento: "" }]);
  };

  const updateProduto = (index: number, key: keyof Produto, value: string) => {
    const newProdutos = [...produtos];
    newProdutos[index][key] = value;
    setProdutos(newProdutos);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Produtos</h2>
      {produtos.map((p, i) => (
        <div key={i} className="border p-2 rounded space-y-2">
          <input
            placeholder="Nome"
            value={p.nome}
            onChange={(e) => updateProduto(i, "nome", e.target.value)}
            className="border rounded p-1 w-full"
          />
          <input
            placeholder="Preço"
            value={p.preco}
            onChange={(e) => updateProduto(i, "preco", e.target.value)}
            className="border rounded p-1 w-full"
          />
          <input
            placeholder="Armazenamento"
            value={p.armazenamento || ""}
            onChange={(e) => updateProduto(i, "armazenamento", e.target.value)}
            className="border rounded p-1 w-full"
          />
        </div>
      ))}
      <button onClick={addProduto} className="btn btn-outline mt-2">
        Adicionar Produto
      </button>
    </div>
  );
}
