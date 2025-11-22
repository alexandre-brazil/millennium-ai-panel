"use client";
import { useState, useEffect } from "react";
import { EmpresaData } from "@/types/templates";

type Step5Props = {
  data: EmpresaData;
  onChange: (data: EmpresaData) => void;
};

export default function About({ data, onChange }: Step5Props) {
  const [form, setForm] = useState<EmpresaData>({
    descricao: data.descricao,
    facebook: data.facebook,
    instagram: data.instagram,
    linkedin: data.linkedin,
    twitter: data.twitter,
  });

  useEffect(() => {
    // Sempre que 'form' ou 'onChange' mudar, este efeito é executado.
    onChange(form);
  }, [form, onChange]); // <-- Adicionado 'onChange' aqui

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Sobre a Empresa</h2>

      <div className="flex flex-col">
        <label className="font-semibold">Descrição</label>
        <textarea
          className="border rounded p-2"
          value={form.descricao}
          onChange={(e) => setForm((prev) => ({ ...prev, descricao: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Facebook</label>
        <input
          type="text"
          className="border rounded p-2"
          value={form.facebook || ""}
          onChange={(e) => setForm((prev) => ({ ...prev, facebook: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Instagram</label>
        <input
          type="text"
          className="border rounded p-2"
          value={form.instagram || ""}
          onChange={(e) => setForm((prev) => ({ ...prev, instagram: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">LinkedIn</label>
        <input
          type="text"
          className="border rounded p-2"
          value={form.linkedin || ""}
          onChange={(e) => setForm((prev) => ({ ...prev, linkedin: e.target.value }))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Twitter</label>
        <input
          type="text"
          className="border rounded p-2"
          value={form.twitter || ""}
          onChange={(e) => setForm((prev) => ({ ...prev, twitter: e.target.value }))}
        />
      </div>
    </div>
  );
}
