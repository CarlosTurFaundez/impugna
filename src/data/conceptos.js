// src/data/conceptos.js
// Dataset completo (sin enlaces) — IMPUGNA
// Categorías válidas:
// - "Resolución juez/tribunal"
// - "Resolución LAJ"
// - "Recurso ordinario"
// - "Recurso extraordinario"
// - "Otras impugnaciones"

const conceptos = [
  // ─────────────────────────────
  // BLOQUE I — PRESUPUESTOS / BASES
  // ─────────────────────────────
  {
    id: "b1-448",
    title: "Principio general de recurribilidad",
    category: "Otras impugnaciones",
    articles: "art. 448 LEC",
    link: "",
    se_interpone_ante: "Según el recurso previsto por la ley",
    resuelve: "Órgano ad quem competente",
    plazo: "Según el recurso aplicable",
    efectos: "",
    estrategia:
      "La irrecurribilidad es excepcional; antes de dejar transcurrir el plazo, verificar recurso previsto."
  },
  {
    id: "b1-gravamen",
    title: "Requisito de gravamen",
    category: "Otras impugnaciones",
    articles: "art. 448.1 LEC",
    link: "",
    se_interpone_ante: "—",
    resuelve: "—",
    plazo: "—",
    efectos: "",
    estrategia:
      "Expón el perjuicio procesal real en el encabezado; sin gravamen, el recurso será inadmitido."
  },
  {
    id: "b1-firmeza",
    title: "Falta de firmeza",
    category: "Otras impugnaciones",
    articles: "arts. 207–208 LEC",
    link: "",
    se_interpone_ante: "—",
    resuelve: "—",
    plazo: "—",
    efectos: "",
    estrategia:
      "Controla el dies a quo desde notificación/acto; evita firmeza por pasividad."
  },
  {
    id: "b1-136",
    title: "Preclusión y momento procesal",
    category: "Otras impugnaciones",
    articles: "art. 136 LEC",
    link: "",
    se_interpone_ante: "—",
    resuelve: "—",
    plazo: "—",
    efectos: "",
    estrategia:
      "Formula la impugnación en el acto cuando la ley lo exige; pasado el trámite, se pierde el derecho."
  },
  {
    id: "b1-285-446",
    title: "Reposición y protesta en fase de prueba",
    category: "Otras impugnaciones",
    articles: "art. 285.2 LEC (y 446 LEC en verbal)",
    link: "",
    se_interpone_ante: "Mismo tribunal, oral y en el acto",
    resuelve: "Mismo tribunal, en el acto",
    plazo: "Inmediato (durante audiencia previa/vista)",
    efectos: "",
    estrategia:
      "Si inadmiten prueba: reposición oral; si la desestiman, formula protesta para salvaguardar la 2ª instancia."
  },
  {
    id: "b1-449",
    title: "Requisitos especiales de consignación/depósito",
    category: "Otras impugnaciones",
    articles: "art. 449 LEC",
    link: "",
    se_interpone_ante: "Según el recurso",
    resuelve: "Según el recurso",
    plazo: "Previo a la admisión",
    efectos: "",
    estrategia:
      "En desahucio/ejecución con lanzamiento, acompaña justificante de consignación; vigila exenciones y subsanación."
  },

  // ─────────────────────────────
  // BLOQUE II — RESOLUCIONES
  // ─────────────────────────────
  {
    id: "rj-sentencia",
    title: "Sentencia",
    category: "Resolución juez/tribunal",
    articles: "arts. 206.1, 208, 209 LEC",
    link: "",
    se_interpone_ante: "Juzgado/Tribunal que dictó (preparación/interposición)",
    resuelve: "Audiencia Provincial (o JPI si Paz)",
    plazo: "Apelación: 20 días",
    efectos: "Devolutivo (suspensivo según supuestos legales)",
    estrategia:
      "Si hay omisión de pronunciamiento, pide complemento (art. 215) antes de apelar."
  },
  {
    id: "rj-auto",
    title: "Auto",
    category: "Resolución juez/tribunal",
    articles: "art. 206.2.2º LEC",
    link: "",
    se_interpone_ante: "Mismo tribunal (reposición) · a quo para apelación",
    resuelve: "Mismo tribunal (reposición) · AP (apelación)",
    plazo: "Reposición: 5 días · Apelación: 20 días",
    efectos: "",
    estrategia:
      "Si dudas de apelabilidad, presenta reposición con otrosí preparando apelación."
  },
  {
    id: "rj-providencia",
    title: "Providencia",
    category: "Resolución juez/tribunal",
    articles: "art. 206.2.1º LEC",
    link: "",
    se_interpone_ante: "Mismo tribunal",
    resuelve: "Mismo tribunal",
    plazo: "Reposición: 5 días",
    efectos: "",
    estrategia:
      "Impugna solo si causa gravamen; suelen ser actos de trámite."
  },
  {
    id: "rl-decreto",
    title: "Decreto (LAJ)",
    category: "Resolución LAJ",
    articles: "art. 206.2.3º LEC; 454 bis LEC",
    link: "",
    se_interpone_ante: "LAJ (reposición o presentación de revisión)",
    resuelve: "LAJ (reposición) · Juez/Tribunal (revisión, por auto)",
    plazo: "5 días",
    efectos: "",
    estrategia:
      "En revisión, concreta agravio procesal y pide auto estimatorio del Juez/Tribunal."
  },
  {
    id: "rl-diligencia",
    title: "Diligencia (LAJ)",
    category: "Resolución LAJ",
    articles: "art. 206.2.4º LEC",
    link: "",
    se_interpone_ante: "LAJ (reposición), salvo ejecución de mandato judicial",
    resuelve: "LAJ",
    plazo: "5 días",
    efectos: "",
    estrategia:
      "Distingue diligencias de ordenación/constancia/comunicación/ejecución/subsanación."
  },
  {
    id: "rj-oral",
    title: "Resoluciones orales en el acto",
    category: "Resolución juez/tribunal",
    articles: "art. 210 LEC",
    link: "",
    se_interpone_ante: "—",
    resuelve: "—",
    plazo: "Cómputo desde el mismo acto",
    efectos: "",
    estrategia:
      "Exige constancia en acta/grabación; advierte al usuario si la resolución fue oral (afecta plazos)."
  },

  // ─────────────────────────────
  // BLOQUE III — RECURSOS
  // ─────────────────────────────
  {
    id: "ro-reposicion",
    title: "Recurso de reposición",
    category: "Recurso ordinario",
    articles: "arts. 451–454 LEC",
    link: "",
    se_interpone_ante: "Mismo órgano que dictó (Juez/LAJ)",
    resuelve: "Mismo órgano",
    plazo: "5 días · En prueba: oral en el acto (285.2/446)",
    efectos: "No suspensivo salvo previsión",
    estrategia:
      "En fase probatoria: reposición oral y, si se desestima, protesta para 2ª instancia."
  },
  {
    id: "ro-revision",
    title: "Recurso de revisión (decreto LAJ)",
    category: "Recurso ordinario",
    articles: "art. 454 bis LEC",
    link: "",
    se_interpone_ante: "LAJ (presentación y admisión)",
    resuelve: "Juez/Tribunal (por auto)",
    plazo: "5 días",
    efectos: "No suspensivo salvo decisión",
    estrategia:
      "Argumenta infracción procesal y agravio; adjunta testimonio si es preciso."
  },
  {
    id: "ro-apelacion",
    title: "Recurso de apelación",
    category: "Recurso ordinario",
    articles: "arts. 455–467 LEC",
    link: "",
    se_interpone_ante: "Tribunal a quo (preparación e interposición)",
    resuelve: "Audiencia Provincial (o JPI si Paz)",
    plazo: "20 días",
    efectos: "Abre 2ª instancia (sentencias) / revisión limitada (autos)",
    estrategia:
      "Respetar 457–458; motivos claros; controla notificación y depósitos del 449 si proceden."
  },
  {
    id: "ro-queja",
    title: "Recurso de queja",
    category: "Recurso ordinario",
    articles: "arts. 494–495 LEC",
    link: "",
    se_interpone_ante: "Tribunal ad quem competente (con testimonio)",
    resuelve: "Órgano superior",
    plazo: "10 días desde entrega/testimonio",
    efectos: "",
    estrategia:
      "Úsalo frente a inadmisión indebida de apelación/infracción/casación."
  },
  {
    id: "rx-casacion",
    title: "Recurso de casación",
    category: "Recurso extraordinario",
    articles: "arts. 477–489 LEC",
    link: "",
    se_interpone_ante: "Tribunal que dictó la 2ª instancia (para elevación)",
    resuelve: "Tribunal Supremo / TSJ (foral)",
    plazo: "20 días (desde tener por preparado)",
    efectos: "",
    estrategia:
      "Acredita interés casacional o infracción sustantiva; altísima inadmisión por defectos formales."
  },
  {
    id: "rx-infr-procesal",
    title: "Recurso extraordinario por infracción procesal",
    category: "Recurso extraordinario",
    articles: "arts. 468–476 LEC",
    link: "",
    se_interpone_ante: "Tribunal a quo (preparación/interposición)",
    resuelve: "TS o TSJ (según competencia)",
    plazo: "20 días",
    efectos: "",
    estrategia:
      "Denuncia infracción procesal con indefensión (art. 469 y ss.); cuida presupuestos de admisibilidad."
  },

  // ─────────────────────────────
  // BLOQUE III — OTRAS FORMAS DE IMPUGNACIÓN
  // ─────────────────────────────
  {
    id: "oi-aclaracion",
    title: "Aclaración",
    category: "Otras impugnaciones",
    articles: "art. 214 LEC",
    link: "",
    se_interpone_ante: "Mismo órgano que dictó",
    resuelve: "Mismo órgano",
    plazo: "2 días",
    efectos: "",
    estrategia:
      "Corrige errores materiales/aritméticos o conceptos oscuros sin alterar el fallo."
  },
  {
    id: "oi-complemento",
    title: "Complemento",
    category: "Otras impugnaciones",
    articles: "art. 215 LEC",
    link: "",
    se_interpone_ante: "Mismo órgano que dictó",
    resuelve: "Mismo órgano",
    plazo: "5 días",
    efectos: "",
    estrategia:
      "Si falta pronunciamiento, es preceptivo pedirlo antes de alegarlo en apelación."
  },
  {
    id: "oi-correccion",
    title: "Corrección",
    category: "Otras impugnaciones",
    articles: "art. 216 LEC",
    link: "",
    se_interpone_ante: "Mismo órgano que dictó",
    resuelve: "Mismo órgano",
    plazo: "Inmediato tras advertir defecto",
    efectos: "",
    estrategia:
      "Rectifica defectos en la formación/expedición de la resolución o copias."
  },
  {
    id: "oi-subsanacion",
    title: "Subsanación de defectos procesales",
    category: "Otras impugnaciones",
    articles: "art. 231 LEC",
    link: "",
    se_interpone_ante: "Órgano que dirige el proceso",
    resuelve: "Mismo órgano",
    plazo: "El que señale el tribunal",
    efectos: "",
    estrategia:
      "Solicítala antes de pretender nulidad; evita retroacciones innecesarias."
  },
  {
    id: "oi-protesta",
    title: "Protesta (fase probatoria)",
    category: "Otras impugnaciones",
    articles: "art. 285.2 LEC (y 446 LEC en verbal)",
    link: "",
    se_interpone_ante: "Mismo tribunal, en el acto",
    resuelve: "—",
    plazo: "Inmediato (tras desestimar reposición)",
    efectos: "",
    estrategia:
      "Deja constancia literal en acta/grabación para poder hacerlo valer en 2ª instancia."
  },
  {
    id: "oi-nulidad-227",
    title: "Nulidad de actuaciones (curso del proceso)",
    category: "Otras impugnaciones",
    articles: "art. 227 LEC",
    link: "",
    se_interpone_ante: "Mismo órgano que conoce del proceso",
    resuelve: "Mismo órgano",
    plazo: "Durante la tramitación",
    efectos: "",
    estrategia:
      "Dirigida a depurar actuaciones nulas; úsala antes de sentencia si es subsanable."
  },
  {
    id: "oi-nulidad-228",
    title: "Incidente excepcional de nulidad",
    category: "Otras impugnaciones",
    articles: "art. 228 LEC y 241 LOPJ",
    link: "",
    se_interpone_ante: "Mismo tribunal que dictó resolución firme",
    resuelve: "Mismo tribunal",
    plazo: "20 días desde conocimiento",
    efectos: "",
    estrategia:
      "Último remedio por vulneración de derechos fundamentales cuando no hay recurso posible."
  }
];

export default conceptos;
