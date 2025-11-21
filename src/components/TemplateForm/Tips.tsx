"use client";
import { useState, useEffect } from "react";
import { DicasData } from "@/types/templates";

type Step3Props = {
  data: DicasData;
  onChange: (data: DicasData) => void;
};

export default function Tips({ data, onChange }: Step3Props) {
  const [form, setForm] = useState<DicasData>({
    dicas: data.dicas,
    localizacao: data.localizacao,
    catalogoLink: data.catalogoLink,
    catalogoDescricao: data.catalogoDescricao,
  });

  useEffect(() => {
    onChange(form);
  }, [form]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Dicas, Localização e Catálogo</h2>

      <div className="flex flex-col">
        <label className="font-semibold">Dicas</label>
        <textarea
          className="border rounded p-2"
          value={form.dicas}
          onChange={(e) => setForm((prev) => ({ ...prev, dicas: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Localização</label>
        <input
          type="text"
          className="border rounded p-2"
          value={form.localizacao}
          onChange={(e) => setForm((prev) => ({ ...prev, localizacao: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Catálogo - Link</label>
        <input
          type="text"
          className="border rounded p-2"
          value={form.catalogoLink}
          onChange={(e) => setForm((prev) => ({ ...prev, catalogoLink: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Catálogo - Descrição</label>
        <textarea
          className="border rounded p-2"
          value={form.catalogoDescricao}
          onChange={(e) => setForm((prev) => ({ ...prev, catalogoDescricao: e.target.value }))}
        />
      </div>
    </div>
  );
}
