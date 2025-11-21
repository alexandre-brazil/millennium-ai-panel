"use client";
import { useState, useEffect } from "react";
import { PromptData } from "@/types/templates";

type Step1Props = {
  data: PromptData;
  onChange: (data: PromptData) => void;
};

export default function Prompt({ data, onChange }: Step1Props) {
  const [form, setForm] = useState<PromptData>({
    objetivo: data.objetivo,
    contexto: data.contexto,
    limitacoes: data.limitacoes,
    estilo: data.estilo,
  });

  useEffect(() => {
    onChange(form);
  }, [form]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Descreva o Agent</h2>
      {["objetivo", "contexto", "limitacoes", "estilo"].map((field) => (
        <div key={field} className="flex flex-col">
          <label className="font-semibold capitalize">{field}</label>
          <textarea
            className="border rounded p-2"
            value={form[field as keyof PromptData]}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, [field]: e.target.value }))
            }
          />
        </div>
      ))}
    </div>
  );
}
