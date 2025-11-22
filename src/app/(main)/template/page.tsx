'use client';

import About from "@/components/TemplateForm/About";
import Instructions from "@/components/TemplateForm/Instructions";
import Products from "@/components/TemplateForm/Products";
import Prompt from "@/components/TemplateForm/Prompt";
import Tips from "@/components/TemplateForm/Tips";

import { useState, useCallback } from "react"; // 👈 Importe useCallback

import { TemplateWizardData} from "@/types/templates";

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

  // Função centralizada de atualização de estado, memorizada.
  const updateFormData = useCallback(
    <T extends keyof TemplateWizardData>(section: T, data: TemplateWizardData[T]) => {
      setFormData((prev) => ({ ...prev, [section]: data }));
    },
    [] // setFormData é estável, então não precisa de dependências
  );

  // 💡 Handlers Memorizados
  // Crie um callback memorizado para cada seção, fixando o nome da seção.
  const handlePromptChange = useCallback(
    (data: TemplateWizardData["prompt"]) => updateFormData("prompt", data),
    [updateFormData]
  );
  
  const handleInstructionsChange = useCallback(
    (data: TemplateWizardData["instrucoes"]) => updateFormData("instrucoes", data),
    [updateFormData]
  );

  const handleTipsChange = useCallback(
    (data: TemplateWizardData["dicas"]) => updateFormData("dicas", data),
    [updateFormData]
  );
  
  const handleProductsChange = useCallback(
    (data: TemplateWizardData["produtos"]) => updateFormData("produtos", data),
    [updateFormData]
  );

  const handleAboutChange = useCallback(
    (data: TemplateWizardData["empresa"]) => updateFormData("empresa", data),
    [updateFormData]
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {step === 1 && (
        // Passe a função memorizada
        <Prompt data={formData.prompt} onChange={handlePromptChange} /> 
      )}
      {step === 2 && (
        <Instructions data={formData.instrucoes} onChange={handleInstructionsChange} />
      )}
      {step === 3 && (
        <Tips data={formData.dicas} onChange={handleTipsChange} />
      )}
      {step === 4 && (
        <Products data={formData.produtos} onChange={handleProductsChange} />
      )}
      {step === 5 && (
        <About data={formData.empresa} onChange={handleAboutChange} />
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