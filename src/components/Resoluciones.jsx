import React, { useEffect, useState } from "react";

export default function Resoluciones() {
  const [resoluciones, setResoluciones] = useState([]);

  useEffect(() => {
    fetch("/data/resoluciones.json")
      .then((response) => response.json())
      .then((data) => setResoluciones(data))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Identifica el recurso procedente
      </h1>

      {resoluciones.length === 0 ? (
        <p className="text-center text-gray-500">
          Cargando resoluciones...
        </p>
      ) : (
        <div className="space-y-4">
          {resoluciones.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                {item.tipo}
              </h2>
              <p>
                <strong>Dicta:</strong> {item.dicta}
              </p>
              <p>
                <strong>Recurso:</strong> {item.recurso}
              </p>
              <p>
                <strong>Plazo:</strong> {item.plazo}
              </p>
              <p>
                <strong>Órgano competente:</strong> {item.organo}
              </p>
              <p className="mt-2 text-sm text-gray-700 italic">
                {item.explicacion}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Fundamento:</strong> {item.fundamento} (
                <a
                  href={item.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Ver LEC
                </a>
                )
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

