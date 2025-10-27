import React from "react";

export function Navbar({ title = "IMPUGNA", onNavigate }) {
  return (
    <nav className="bg-grafito text-white py-3 px-6 flex justify-between items-center shadow-md">
      <span className="text-2xl font-semibold tracking-wide">{title}</span>
      <div className="space-x-6">
        <button onClick={() => onNavigate("recursos")} className="hover:text-gray-300">
          Identifica el recurso
        </button>
        <button onClick={() => onNavigate("conceptos")} className="hover:text-gray-300">
          Conceptos generales
        </button>
      </div>
    </nav>
  );
}
