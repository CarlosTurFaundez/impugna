import React, { useMemo, useState } from "react";
import conceptos from "../data/conceptos";
import "./conceptos.css";

const CATEGORIAS = [
  "Todas",
  "Resolución juez/tribunal",
  "Resolución LAJ",
  "Recurso ordinario",
  "Recurso extraordinario",
  "Otras impugnaciones",
];

export default function ConceptosGenerales() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");

function normalizeSearch(str) {
  return str
    ? str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    : "";
}

const filtered = useMemo(() => {
  const text = normalizeSearch(q);
  return conceptos.filter((item) => {
    const matchCat = cat === "Todas" ? true : item.category === cat;
    if (!text) return matchCat;
    const haystack = normalizeSearch(
      item.title +
        " " +
        item.articles +
        " " +
        item.category +
        " " +
        (item.se_interpone_ante || "") +
        " " +
        (item.resuelve || "") +
        " " +
        (item.plazo || "") +
        " " +
        (item.efectos || "") +
        " " +
        (item.estrategia || "")
    );
    return matchCat && haystack.includes(text);
  });
}, [q, cat]);


  return (
    <div className="cg-wrap">
      <header className="cg-header">
        <h1>Conceptos Generales — IMPUGNA</h1>
        <p className="cg-sub">
          Bases procesales con enlace directo al BOE. Selecciona, busca y consulta con comodidad.
        </p>
      </header>

      <section className="cg-controls">
        <div className="cg-search">
          <input
            type="text"
            placeholder="Buscar por título, artículo, órgano, plazo…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <div className="cg-cats">
          {CATEGORIAS.map((c) => (
            <button
              key={c}
              className={`cg-chip ${cat === c ? "active" : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="cg-grid">
        {filtered.map((item) => (
          <article key={item.id} className="cg-card">
            <div className="cg-card-head">
              <h2>{item.title}</h2>
              <span className={`cg-badge ${badgeClass(item.category)}`}>
                {item.category}
              </span>
            </div>

            <dl className="cg-meta">
              <div>
                <dt>Fundamento legal</dt>
                <dd>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.articles} — Consultar BOE
                  </a>
                </dd>
              </div>

              {item.se_interpone_ante && (
                <div>
                  <dt>Se interpone ante</dt>
                  <dd>{item.se_interpone_ante}</dd>
                </div>
              )}

              {item.resuelve && (
                <div>
                  <dt>Resuelve</dt>
                  <dd>{item.resuelve}</dd>
                </div>
              )}

              {item.plazo && (
                <div>
                  <dt>Plazo</dt>
                  <dd>{item.plazo}</dd>
                </div>
              )}

              {item.efectos && (
                <div>
                  <dt>Efectos</dt>
                  <dd>{item.efectos}</dd>
                </div>
              )}
            </dl>

            {item.estrategia && (
              <div className="cg-extra">
                <h3>Estrategia</h3>
                <p>{item.estrategia}</p>
              </div>
            )}
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="cg-empty">Sin resultados con ese filtro/búsqueda.</div>
        )}
      </section>
    </div>
  );
}

function badgeClass(category) {
  if (category === "Resolución juez/tribunal") return "badge-judge";
  if (category === "Resolución LAJ") return "badge-laj";
  if (category === "Recurso ordinario") return "badge-ord";
  if (category === "Recurso extraordinario") return "badge-ext";
  if (category === "Otras impugnaciones") return "badge-otras";
  return "";
}

