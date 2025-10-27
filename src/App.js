import React, { useState } from "react";
import { Navbar } from "./components/ui/navbar";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Dialog } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import ConceptosGenerales from "./pages/ConceptosGenerales";

function App() {
  const [page, setPage] = useState("recursos");
  const [modalOpen, setModalOpen] = useState(true);
  const [resolucion, setResolucion] = useState("");
  const [resultado, setResultado] = useState("");

  const handleIdentify = () => {
    const mapping = {
      sentencia: "Apelación (art. 455 LEC).",
      auto: "Recurso de apelación o reposición, según proceda (arts. 451–455 LEC).",
      providencia: "Recurso de reposición (art. 451 LEC).",
      decreto: "Recurso de revisión (art. 454 bis LEC)."
    };
    setResultado(mapping[resolucion.toLowerCase()] || "Tipo de resolución no reconocido.");
  };

  return (
    <div className="min-h-screen bg-perla">
      <Navbar title="IMPUGNA" onNavigate={setPage} />

      {/* MODAL DE EXONERACIÓN */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Aviso y exoneración de responsabilidad"
      >
        <p className="text-sm text-gray-700 mb-4">
          Esta aplicación tiene finalidad académica y orientativa. 
          No sustituye el análisis jurídico profesional ni genera responsabilidad 
          por el uso de sus resultados. Confirme que ha leído y comprendido este aviso.
        </p>
        <Button variant="default" onClick={() => setModalOpen(false)}>
          He leído y comprendo
        </Button>
      </Dialog>

      <main className="max-w-3xl mx-auto p-6">
        {page === "recursos" && (
          <Card title="Identifica el recurso procedente">
            <Input
              label="Tipo de resolución judicial"
              placeholder="Ejemplo: sentencia, auto, providencia..."
              value={resolucion}
              onChange={(e) => setResolucion(e.target.value)}
            />
            <Button onClick={handleIdentify} className="mt-2">
              Identificar recurso
            </Button>
            {resultado && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-gray-800">
                  <strong>Recurso procedente:</strong> {resultado}
                </p>
              </div>
            )}
          </Card>
        )}

        {page === "conceptos" && (
         <Card title="Conceptos generales">
    <ConceptosGenerales />
      </Card>
    )}

      
      </main>

      <footer className="text-center py-4 text-sm text-gray-500">
        Powered by <strong>CTF Research</strong>
      </footer>
    </div>
  );
}

export default App;
