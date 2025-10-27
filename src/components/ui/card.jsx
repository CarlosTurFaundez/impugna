import React from "react";

export function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-6 border border-gray-200 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
