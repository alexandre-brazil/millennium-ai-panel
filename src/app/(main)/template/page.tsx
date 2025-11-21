"use client";
import About from "@/components/TemplateForm/About";
import Instructions from "@/components/TemplateForm/Instructions";
import Products from "@/components/TemplateForm/Products";
import Prompt from "@/components/TemplateForm/Prompt";
import Tips from "@/components/TemplateForm/Tips";

import { useState } from "react";

import { TemplateWizardData, PromptData, InstrucoesData, DicasData, Produto, EmpresaData } from "@/types/templates";

export default function TemplateWizard() {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<TemplateWizardData>({
    prompt: { objetivo: "", contexto: "", limitacoes: "", estilo: "" },
    instrucoes: { instrucoes: "", exemplos: "", condicoesPagamento: "" },
    dicas: { dicas: "", localizacao: "", catalogoLink: "", catalogoDescricao: "" },
    produtos: [],
    empresa: { descricao: "" },
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = <T extends keyof TemplateWizardData>(section: T, data: TemplateWizardData[T]) => {
    setFormData((prev) => ({ ...prev, [section]: data }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {step === 1 && (
        <Prompt data={formData.prompt} onChange={(d) => handleChange("prompt", d)} />
      )}
      {step === 2 && (
        <Instructions data={formData.instrucoes} onChange={(d) => handleChange("instrucoes", d)} />
      )}
      {step === 3 && (
        <Tips data={formData.dicas} onChange={(d) => handleChange("dicas", d)} />
      )}
      {step === 4 && (
        <Products data={formData.produtos} onChange={(d) => handleChange("produtos", d)} />
      )}
      {step === 5 && (
        <About data={formData.empresa} onChange={(d) => handleChange("empresa", d)} />
      )}

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} disabled={step === 1} className="btn">
          Voltar
        </button>
        {step < 5 ? (
          <button onClick={nextStep} className="btn btn-primary">
            Próximo
          </button>
        ) : (
          <button onClick={() => console.log(formData)} className="btn btn-success">
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
}
