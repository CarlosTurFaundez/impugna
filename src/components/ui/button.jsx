import React from "react";
import clsx from "clsx";

export function Button({ children, className, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded-xl font-medium transition focus:outline-none focus:ring";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    subtle: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
