"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputNota } from "./components/InputNota";

export default function CalculadoraNotas() {
  const [notas, setNotas] = useState({
    compreensao1: "",
    compreensao2: "",
    prova1: "",
    prova2: "",
    portfolio: "",
    projetoIntegrador: "",
  });
  const [media, setMedia] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Permite valores vazios (quando o usuário apaga tudo)
    if (value === "") {
      setNotas((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    // Remove caracteres não numéricos, exceto o ponto
    let formattedValue = value.replace(/[^0-9.]/g, "").slice(0, 3);

    // Verifica se já contém um ponto e ajusta o valor
    if (
      formattedValue.length === 2 &&
      formattedValue !== "10" &&
      !formattedValue.includes(".")
    ) {
      formattedValue = formattedValue[0] + "." + formattedValue[1];
    } else if (formattedValue.length === 3 && !formattedValue.includes(".")) {
      formattedValue = formattedValue.slice(0, 2);
    }

    setNotas((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const calcularMedia = () => {
    const getNota = (valor: string) => (valor === "" ? 0 : parseFloat(valor));

    const mediaCompreensao =
      (getNota(notas.compreensao1) + getNota(notas.compreensao2)) / 2;
    const mediaProvas = (getNota(notas.prova1) + getNota(notas.prova2)) / 2;
    const mediaFinal =
      mediaCompreensao * 0.2 +
      mediaProvas * 0.4 +
      getNota(notas.portfolio) * 0.1 +
      getNota(notas.projetoIntegrador) * 0.3;

    setMedia(parseFloat(mediaFinal.toFixed(2)));
  };

  return (
    <div className="container mx-auto py-10 px-5">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Calculadora de Notas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputNota
              label="Exercício de Compreensão 1"
              name="compreensao1"
              value={notas.compreensao1}
              onChange={handleInputChange}
            />
            <InputNota
              label="Exercício de Compreensão 2"
              name="compreensao2"
              value={notas.compreensao2}
              onChange={handleInputChange}
            />
            <InputNota
              label="Prova 1"
              name="prova1"
              value={notas.prova1}
              onChange={handleInputChange}
            />
            <InputNota
              label="Prova 2"
              name="prova2"
              value={notas.prova2}
              onChange={handleInputChange}
            />
            <InputNota
              label="Portfólio"
              name="portfolio"
              value={notas.portfolio}
              onChange={handleInputChange}
            />
            <InputNota
              label="Projeto Integrador"
              name="projetoIntegrador"
              value={notas.projetoIntegrador}
              onChange={handleInputChange}
            />
          </div>
          <Button className="w-full mt-6" onClick={calcularMedia}>
            Calcular Média
          </Button>
          {media !== null && (
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold">Média Final:</h2>
              <p className="text-3xl font-bold text-primary">{media}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
