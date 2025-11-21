"use client";
import { useState, useEffect } from "react";
import { InstrucoesData } from "@/types/templates";

type Step2Props = {
  data: InstrucoesData;
  onChange: (data: InstrucoesData) => void;
};

export default function Instructions({ data, onChange }: Step2Props) {
  const [form, setForm] = useState<InstrucoesData>({
    instrucoes: data.instrucoes,
    exemplos: data.exemplos,
    condicoesPagamento: data.condicoesPagamento,
  });

  useEffect(() => {
    onChange(form);
  }, [form]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Instruções e Exemplos</h2>

      <div className="flex flex-col">
        <label className="font-semibold">Instruções</label>
        <textarea
          className="border rounded p-2"
          value={form.instrucoes}
          onChange={(e) => setForm((prev) => ({ ...prev, instrucoes: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Exemplos de respostas</label>
        <textarea
          className="border rounded p-2"
          value={form.exemplos}
          onChange={(e) => setForm((prev) => ({ ...prev, exemplos: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Condições de pagamento</label>
        <textarea
          className="border rounded p-2"
          value={form.condicoesPagamento}
          onChange={(e) => setForm((prev) => ({ ...prev, condicoesPagamento: e.target.value }))}
        />
      </div>
    </div>
  );
}
