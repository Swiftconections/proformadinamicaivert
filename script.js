"use strict";

const CONFIG = {
  iva: 0.15,
  precioBloqueLineal: 83.33,
  precioMetroJardinAdicional: 75,
  columnasPorMetro: 5,
  moneda: "USD"
};

const SEGMENTOS_BASE_COLUMNAS = [35, 45, 35, 75, 35, 45, 30];

const COLORES = {
  cesped: "#a9d970",
  agapantoAzul: "#7774c9",
  escancelRojo: "#c6473f",
  espigaVerde: "#3f8a58",
  espigaRoja: "#8f2f35",
  lavanda: "#6f3fb5",
  margaritaMorada: "#c9afe8",
  salviaMorada: "#c7a6f2",
  salviaBicolor: "#ffffff",
  quinceaneraRastrera: "#e98cac",
  vinca: "#f2d45c",
  vacio: "#dde4df"
};

const IMAGENES_PLANTAS = {
  lavanda: "https://ivertecuador.com/assets/images/image06.png?v=9a3e4f9c",
  margaritaMorada: "https://ivertecuador.com/assets/images/image07.png?v=9a3e4f9c",
  agapantoAzul: "https://ivertecuador.com/assets/images/image11.png?v=9a3e4f9c",
  escancelRojo: "https://ivertecuador.com/assets/images/image12.png?v=9a3e4f9c",
  espigaRoja: "https://ivertecuador.com/assets/images/image13.png?v=9a3e4f9c",
  espigaVerde: "https://ivertecuador.com/assets/images/image14.png?v=9a3e4f9c",
  salviaMorada: "https://ivertecuador.com/assets/images/image15.png?v=9a3e4f9c",
  salviaBicolor: "https://ivertecuador.com/assets/images/image16.png?v=9a3e4f9c",
  quinceaneraRastrera: "https://ivertecuador.com/assets/images/image17.png?v=9a3e4f9c",
  vinca: "https://ivertecuador.com/assets/images/image05.png?v=9a3e4f9c"
};

const CONDICIONES_COMERCIALES = [
  "Anticipo del 50%.",
  "El otro 50% con crédito de hasta 30 días.",
  "Una vez confirmado el anticipo, necesitamos 3 días para gestionar compra y traslado de plantas, tierra y materiales.",
  "El inicio del proyecto sería en 4 días hábiles, posterior al anticipo.",
  "El tiempo estimado para realizar el trabajo es de 15 días hábiles."
];

const NOTA_CESPED_CONTINUO = "Hasta los 6 metros, el césped funcionará perfecto: se verá ordenado, agradable y equilibrado. Al superar esa extensión, el mantenimiento puede ser más rápido, pero visualmente puede sentirse demasiado uniforme sin otros elementos que acompañen el diseño.";
const DETALLE_TRABAJO_PDF = "El trabajo incluye el rediseño paisajístico del jardín, preparación del suelo con tierra abonada y abono, distribución estética de plantas, retiro de desechos y limpieza final del área.";
const DESTINATARIO_PDF = "Sres. Hanaska";

const PLANTAS = {
  cesped: { nombre: "Césped", slug: "cesped", color: COLORES.cesped },
  agapantoAzul: { nombre: "Agapanto azul", slug: "agapanto-azul", color: COLORES.agapantoAzul, imagen: IMAGENES_PLANTAS.agapantoAzul },
  escancelRojo: { nombre: "Escancel rojo", slug: "escancel-rojo", color: COLORES.escancelRojo, imagen: IMAGENES_PLANTAS.escancelRojo },
  espigaVerde: { nombre: "Espiga Verde", slug: "espiga-verde", color: COLORES.espigaVerde, imagen: IMAGENES_PLANTAS.espigaVerde },
  espigaRoja: { nombre: "Espiga Roja", slug: "espiga-roja", color: COLORES.espigaRoja, imagen: IMAGENES_PLANTAS.espigaRoja },
  lavanda: { nombre: "Lavanda", slug: "lavanda", color: COLORES.lavanda, imagen: IMAGENES_PLANTAS.lavanda },
  margaritaMorada: { nombre: "Margarita morada", slug: "margarita-morada", color: COLORES.margaritaMorada, imagen: IMAGENES_PLANTAS.margaritaMorada },
  salviaMorada: { nombre: "Salvia Morada", slug: "salvia-morada", color: COLORES.salviaMorada, imagen: IMAGENES_PLANTAS.salviaMorada },
  salviaBicolor: { nombre: "Salvia bicolor", slug: "salvia-bicolor", color: COLORES.salviaBicolor, imagen: IMAGENES_PLANTAS.salviaBicolor },
  quinceaneraRastrera: { nombre: "Quinceañera rastrera", slug: "quinceanera-rastrera", color: COLORES.quinceaneraRastrera, imagen: IMAGENES_PLANTAS.quinceaneraRastrera },
  vinca: { nombre: "Vinca", slug: "vinca", color: COLORES.vinca, imagen: IMAGENES_PLANTAS.vinca },
  vacio: { nombre: "Base sin asignar", slug: "vacio", color: COLORES.vacio }
};

const PATRONES_PLANTAS = {
  "opcion-1": {
    nombre: "Opción 1",
    plantas: [PLANTAS.espigaVerde, PLANTAS.espigaRoja, PLANTAS.lavanda, PLANTAS.margaritaMorada],
    mapa: [
      "G",
      "G",
      "R",
      "R",
      "R",
      "R",
      "G",
      "G"
    ]
  },
  "opcion-2": {
    nombre: "Opción 2",
    plantas: [PLANTAS.espigaRoja, PLANTAS.espigaVerde],
    reiniciarPorZona: true,
    mapa: [
      "RGGRRRGGRGGGGGGGGRGGGRRRRGGGGGGGGGGR",
      "GGGGRGGGGGGRRRRRRGGGGGRRGGGGGRRRRRRG",
      "GGGGGGGGGGRRRRRRRRGGGGGGGGGGRRRRRRRR",
      "RGGGGGGGGRRRGGGGRRRGGGGGGGGRRRGGGGRR",
      "RRRGGGGRRRGGGGGGGGRRRGGGGRRRGGGGGGGG",
      "GRRRRRRRRGGGGGGGGGGRRRRRRRGGGGGGGGG",
      "GGRRRRRRGGGGGRGGGGGGRRRRRRGGGGGRRGGG",
      "RGGGGGGGRGGGRRRGGRGGGGGGGGRGGGRRRGGR"
    ]
  },
  "opcion-3": {
    nombre: "Opción 3",
    plantas: [PLANTAS.salviaBicolor, PLANTAS.quinceaneraRastrera],
    tipo: "onda",
    onda: {
      fase: -0.7,
      frecuencia: 14.4
    }
  }
};

const gradas = [
  {
    id: "grada-3",
    nombre: "Grada 3 - Superior",
    largoMetros: 60,
    anchoMetros: 1.5,
    columnas: 300,
    filas: 7,
    tieneCesped: false,
    patronActivo: "onda-rojo-azul",
    filaVinca: "G",
    plantas: ["Escancel rojo", "Margarita morada", "Agapanto azul", "Vinca"],
    puntos: []
  },
  {
    id: "grada-2",
    nombre: "Grada 2 - Intermedia",
    largoMetros: 60,
    anchoMetros: 2,
    columnas: 300,
    filas: 9,
    tieneCesped: true,
    segmentosColumnas: SEGMENTOS_BASE_COLUMNAS,
    segmentosCespedIniciales: [0, 2, 4, 6],
    segmentosCespedActivos: new Set([0, 2, 4, 6]),
    metrosJardinAdicional: 0,
    patronPlantas: "opcion-1",
    coloresInvertidos: false,
    filaVinca: "I",
    plantas: ["Espiga verde", "Margarita morada"],
    puntos: []
  },
  {
    id: "grada-1",
    nombre: "Grada 1 - Inferior",
    largoMetros: 60,
    anchoMetros: 2,
    columnas: 300,
    filas: 9,
    tieneCesped: true,
    segmentosColumnas: SEGMENTOS_BASE_COLUMNAS,
    segmentosCespedIniciales: [1, 3, 5],
    segmentosCespedActivos: new Set([1, 3, 5]),
    metrosJardinAdicional: 0,
    patronPlantas: "opcion-1",
    coloresInvertidos: false,
    filaVinca: "I",
    plantas: ["Espiga verde", "Margarita morada"],
    puntos: []
  }
];

const elementos = {
  configToggleButton: document.getElementById("configToggleButton"),
  controlsPanel: document.getElementById("controlsPanel"),
  designLayout: document.getElementById("designLayout"),
  gradesContainer: document.getElementById("gradesContainer"),
  controlsContainer: document.getElementById("controlsContainer"),
  commercialConditions: document.getElementById("commercialConditions"),
  previewPdfButton: document.getElementById("previewPdfButton"),
  downloadPdfButton: document.getElementById("downloadPdfButton"),
  pdfModal: document.getElementById("pdfModal"),
  pdfPreviewContainer: document.getElementById("pdfPreviewContainer"),
  resumen: {
    subtotalGeneral: document.getElementById("subtotalGeneral")
  }
};

document.addEventListener("DOMContentLoaded", iniciarAplicacion);

function iniciarAplicacion() {
  renderizarCondiciones();
  crearControles();

  gradas.forEach((grada) => {
    crearGrada(grada);
    crearPuntos(grada);

    if (grada.id === "grada-3") {
      aplicarPatronOnda(grada, grada.patronActivo);
    } else {
      aplicarSegmentosCesped(grada);
    }
  });

  actualizarPrecios();
  conectarEventoConfiguracion();
  conectarEventosVisuales();
  conectarEventosPdf();
}

function conectarEventoConfiguracion() {
  elementos.configToggleButton.addEventListener("click", () => {
    const estaAbierto = elementos.configToggleButton.getAttribute("aria-expanded") === "true";
    const siguienteEstado = !estaAbierto;

    elementos.configToggleButton.setAttribute("aria-expanded", String(siguienteEstado));
    elementos.controlsPanel.hidden = !siguienteEstado;
    elementos.designLayout.classList.toggle("is-config-collapsed", !siguienteEstado);
    const etiqueta = elementos.configToggleButton.querySelector(".config-toggle-label");
    etiqueta.textContent = siguienteEstado ? "Ocultar Configuración" : "Configurar Diseño";
  });
}

// Crea la estructura visual de una grada, con encabezados de columnas y filas.
function crearGrada(grada) {
  const gradeView = document.createElement("article");
  gradeView.className = "grade-view";
  gradeView.id = `${grada.id}-view`;

  const header = document.createElement("div");
  header.className = "grade-view-header";
  header.innerHTML = `
    <div>
      <h3>${grada.nombre}</h3>
    </div>
    <div class="grade-metrics" id="${grada.id}-metrics"></div>
  `;

  const scroll = document.createElement("div");
  scroll.className = "grade-scroll";

  const designNote = document.createElement("div");
  designNote.className = "grade-design-note";
  

  const visualActions = document.createElement("div");
  visualActions.className = "grade-visual-actions";

  if (grada.tieneCesped) {
    const invertButton = document.createElement("button");
    invertButton.className = "invert-color-button";
    invertButton.type = "button";
    invertButton.textContent = "Invertir Color";
    invertButton.dataset.invertColors = grada.id;
    invertButton.setAttribute("aria-pressed", "false");
    visualActions.appendChild(invertButton);

    const warning = document.createElement("div");
    warning.className = "grass-warning";
    warning.id = `${grada.id}-grass-warning`;
    warning.hidden = true;
    warning.innerHTML = `
      <span class="grass-warning-button">
        <span aria-hidden="true">!</span>
        Advertencia
      </span>
      <div class="grass-warning-note" id="${grada.id}-grass-warning-note" role="note"></div>
    `;
    visualActions.appendChild(warning);
  }

  const gridWrap = document.createElement("div");
  gridWrap.className = "grid-wrap";

  const cornerLabel = document.createElement("div");
  cornerLabel.className = "corner-label";

  const columnLabels = document.createElement("div");
  columnLabels.className = "column-labels";
  columnLabels.style.gridTemplateColumns = `repeat(${grada.columnas}, var(--cell-size))`;

  for (let columna = 1; columna <= grada.columnas; columna += 1) {
    const label = document.createElement("span");
    label.className = "column-label";
    label.textContent = columna;
    columnLabels.appendChild(label);
  }

  const rowLabels = document.createElement("div");
  rowLabels.className = "row-labels";

  for (let fila = 1; fila <= grada.filas; fila += 1) {
    const label = document.createElement("span");
    label.className = "row-label";
    label.textContent = obtenerLetraFila(fila);
    rowLabels.appendChild(label);
  }

  const pointsGrid = document.createElement("div");
  pointsGrid.className = "points-grid";
  pointsGrid.id = `${grada.id}-grid`;
  pointsGrid.style.gridTemplateColumns = `repeat(${grada.columnas}, var(--cell-size))`;

  const grassLabels = document.createElement("div");
  grassLabels.className = "grass-labels";
  grassLabels.id = `${grada.id}-grass-labels`;
  grassLabels.style.gridTemplateColumns = `repeat(${grada.columnas}, var(--cell-size))`;

  gridWrap.appendChild(cornerLabel);
  gridWrap.appendChild(columnLabels);
  gridWrap.appendChild(rowLabels);
  gridWrap.appendChild(pointsGrid);
  gridWrap.appendChild(grassLabels);
  scroll.appendChild(designNote);
  if (grada.tieneCesped) {
    scroll.appendChild(visualActions);
  }
  scroll.appendChild(gridWrap);

  const plantGallery = document.createElement("div");
  plantGallery.className = "plant-photo-gallery";
  plantGallery.id = `${grada.id}-plant-gallery`;
  plantGallery.setAttribute("aria-label", `Galería de plantas de ${grada.nombre}`);
  plantGallery.hidden = true;
  scroll.appendChild(plantGallery);

  gradeView.appendChild(header);
  gradeView.appendChild(scroll);
  elementos.gradesContainer.appendChild(gradeView);
}

// Genera los puntos reales con metadata completa y los conecta con su celda del DOM.
function crearPuntos(grada) {
  const fragment = document.createDocumentFragment();
  const grid = document.getElementById(`${grada.id}-grid`);

  for (let fila = 1; fila <= grada.filas; fila += 1) {
    const filaLetra = obtenerLetraFila(fila);

    for (let columna = 1; columna <= grada.columnas; columna += 1) {
      const puntoId = `${grada.id}-${filaLetra}-${columna}`;
      const punto = {
        id: puntoId,
        grada: grada.id,
        fila: filaLetra,
        filaNumero: fila,
        columna,
        tipo: "vacio",
        planta: null,
        precioTipo: null,
        esCesped: false,
        esJardinAdicional: false,
        elemento: null
      };

      const celda = document.createElement("span");
      celda.className = "point-cell";
      celda.id = puntoId;
      celda.dataset.grada = grada.id;
      celda.dataset.fila = filaLetra;
      celda.dataset.columna = String(columna);
      celda.dataset.tipo = "vacio";
      celda.dataset.planta = "vacio";

      punto.elemento = celda;
      grada.puntos.push(punto);
      fragment.appendChild(celda);
    }
  }

  grid.appendChild(fragment);
}

// Aplica ondas cortas y sobrias en Grada 3, manteniendo Escancel y subdividiendo el Agapanto.
function aplicarPatronOnda(grada, patron) {
  grada.patronActivo = patron;

  const fase = patron === "onda-rojo-azul" ? -0.7 : Math.PI - 0.7;
  const filaMinimaEscancel = 1;
  const filaMaximaEscancel = 6;
  const centroOnda = (filaMinimaEscancel + filaMaximaEscancel) / 2;
  const amplitud = (filaMaximaEscancel - filaMinimaEscancel) / 2;

  grada.puntos.forEach((punto) => {
    const avance = punto.columna / grada.columnas;
    const onda = Math.sin(avance * Math.PI * 14.4 + fase);
    const curva = centroOnda + onda * amplitud;
    const limiteEscancel = limitarNumero(Math.round(curva), filaMinimaEscancel, filaMaximaEscancel);
    const filasAgapanto = Math.max(filaMaximaEscancel - limiteEscancel, 0);
    const limiteAgapanto = limiteEscancel + Math.ceil(filasAgapanto / 2);
    let planta = PLANTAS.agapantoAzul;

    if (punto.filaNumero <= limiteEscancel) {
      planta = PLANTAS.escancelRojo;
    } else if (punto.filaNumero <= limiteAgapanto) {
      planta = PLANTAS.margaritaMorada;
    }

    asignarTipoPunto(punto, {
      tipo: "planta",
      planta: planta.nombre,
      plantaSlug: planta.slug,
      precioTipo: "plantas",
      esCesped: false,
      esJardinAdicional: false
    });
  });

  aplicarFilaVinca(grada);
  actualizarGaleriaPlantas(grada);
  marcarBotonActivo(grada.id, patron);
  actualizarPrecios();
}

// Pinta césped o plantas por segmentos completos, respetando 5 columnas por metro.
function aplicarSegmentosCesped(grada) {
  const rangos = obtenerRangosSegmentos(grada);
  const columnasJardinAdicional = obtenerColumnasJardinAdicional(grada);
  const patronPlantas = obtenerConfigPatronPlantas(grada.patronPlantas);

  grada.puntos.forEach((punto) => {
    const segmento = rangos.find((rango) => punto.columna >= rango.inicioColumna && punto.columna <= rango.finColumna);
    const esCespedBase = segmento ? grada.segmentosCespedActivos.has(segmento.indice) : false;
    const esJardinAdicional = esCespedBase && columnasJardinAdicional.has(punto.columna);

    if (esCespedBase && !esJardinAdicional) {
      asignarTipoPunto(punto, {
        tipo: "cesped",
        planta: PLANTAS.cesped.nombre,
        plantaSlug: PLANTAS.cesped.slug,
        precioTipo: "cesped",
        esCesped: true,
        esJardinAdicional: false
      });
      return;
    }

    const origenPatron = patronPlantas.reiniciarPorZona
      ? obtenerOrigenPatronPlantas(segmento, esJardinAdicional, columnasJardinAdicional)
      : 1;
    const planta = obtenerPlantaDeJardin(punto, patronPlantas, origenPatron, grada, segmento);
    asignarTipoPunto(punto, {
      tipo: "planta",
      planta: planta.nombre,
      plantaSlug: planta.slug,
      precioTipo: esJardinAdicional ? "jardin-adicional" : "plantas",
      esCesped: false,
      esJardinAdicional
    });
  });

  aplicarFilaVinca(grada);
  actualizarEtiquetasCesped(grada);
  actualizarAdvertenciaCesped(grada);
  actualizarLeyendaPatronPlantas(grada);
  actualizarGaleriaPlantas(grada);
  actualizarPrecios();
}

// Calcula valores por bloques completos: 1 metro lineal = 5 columnas por todas las filas.
function actualizarPrecios() {
  const resumenGradas = gradas.map((grada) => calcularBloquesGrada(grada));
  const bloquesCotizados = resumenGradas.reduce((total, item) => total + item.bloquesTotales, 0);
  const bloquesPlantas = resumenGradas.reduce((total, item) => total + item.bloquesPlantas, 0);
  const bloquesCesped = resumenGradas.reduce((total, item) => total + item.bloquesCesped, 0);
  const bloquesJardinAdicional = resumenGradas.reduce((total, item) => total + item.bloquesJardinAdicional, 0);
  const subtotalBase = bloquesCotizados * CONFIG.precioBloqueLineal;
  const subtotalJardinAdicional = bloquesJardinAdicional * CONFIG.precioMetroJardinAdicional;
  const subtotalGeneral = subtotalBase + subtotalJardinAdicional;
  const ivaValor = subtotalGeneral * CONFIG.iva;
  const totalFinal = subtotalGeneral + ivaValor;
  const anticipoValor = totalFinal * 0.5;
  const saldoValor = totalFinal * 0.5;

  const resumen = {
    resumenGradas,
    bloquesCotizados,
    bloquesPlantas,
    bloquesCesped,
    bloquesJardinAdicional,
    subtotalBase,
    subtotalJardinAdicional,
    subtotalGeneral,
    ivaValor,
    totalFinal,
    anticipoValor,
    saldoValor
  };

  elementos.resumen.subtotalGeneral.textContent = formatoMoneda(subtotalGeneral);

  resumenGradas.forEach((item) => {
    const metrics = document.getElementById(`${item.id}-metrics`);
    if (!metrics) return;

    metrics.innerHTML = "";
  });

  return resumen;
}

// Devuelve el mismo resumen que usa el PDF, listo para reutilizar o conectar con backend.
function generarResumen() {
  return actualizarPrecios();
}

function previsualizarPDF() {
  const documento = crearDocumentoPdf();
  elementos.pdfPreviewContainer.innerHTML = "";
  elementos.pdfPreviewContainer.appendChild(documento);
  abrirModalPdf();
}

function descargarPDF() {
  const documento = crearDocumentoPdf();
  const contenedorTemporal = document.createElement("div");
  contenedorTemporal.className = "hidden-pdf-source";
  contenedorTemporal.appendChild(documento);
  document.body.appendChild(contenedorTemporal);

  if (!window.html2pdf) {
    alert("No se pudo cargar la librería de PDF. Revisa la conexión al CDN de html2pdf.js.");
    contenedorTemporal.remove();
    return;
  }

  const opciones = {
    margin: 0,
    filename: `proforma-paisajismo-ivert-${obtenerFechaArchivo()}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" }
  };

  window.html2pdf()
    .set(opciones)
    .from(documento)
    .save()
    .finally(() => contenedorTemporal.remove());
}

function crearDocumentoPdf() {
  const template = document.getElementById("pdfTemplate");
  const documento = template.content.firstElementChild.cloneNode(true);
  const resumen = generarResumen();
  const fechaEmision = new Date();

  documento.querySelector("#pdfRecipient").textContent = DESTINATARIO_PDF;
  documento.querySelector("#pdfDate").textContent = formatearFechaLarga(fechaEmision);
  documento.querySelector("#pdfValidUntil").textContent = formatearFechaLarga(obtenerFechaValidezCotizacion(fechaEmision));

  documento.querySelector("#pdfPlantsSummary").innerHTML = crearTablaPlantasPdf(resumen);
  documento.querySelector("#pdfPriceSummary").innerHTML = crearTablaTotalesPdf(resumen);
  documento.querySelector("#pdfVisualSummary").innerHTML = crearVisualResumenPdf();
  documento.querySelector("#pdfConditions").innerHTML = crearCondicionesPdf(resumen);
  actualizarAdvertenciasCespedPdf(documento);

  return documento;
}

function crearControles() {
  gradas.forEach((grada) => {
    const panel = document.createElement("section");
    panel.className = "grade-controls";
    panel.dataset.accordion = grada.id;
    const contenidoId = `${grada.id}-controls-content`;

    if (grada.id === "grada-3") {
      panel.innerHTML = `
        ${crearBotonAcordeonGrada(grada, contenidoId)}
        <div class="grade-controls-content" id="${contenidoId}" hidden>
          <p class="control-note">${crearTextoPlantasGrada(grada)}</p>
          <div class="segmented-buttons" data-grade-pattern="${grada.id}">
            <button class="choice-button" type="button" data-pattern="onda-rojo-azul">Ondas rojo / azul</button>
            <button class="choice-button" type="button" data-pattern="onda-azul-rojo">Ondas azul / rojo</button>
          </div>
        </div>
      `;
    } else {
      panel.innerHTML = `
        ${crearBotonAcordeonGrada(grada, contenidoId)}
        <div class="grade-controls-content" id="${contenidoId}" hidden>
          <div class="extra-garden-control" id="${grada.id}-garden-control"></div>
        </div>
      `;
    }

    elementos.controlsContainer.appendChild(panel);
  });

  crearControlesJardinAdicional();
  conectarEventosControles();
}

function crearBotonAcordeonGrada(grada, contenidoId) {
  return `
    <button
      class="accordion-trigger"
      type="button"
      data-accordion-trigger="${grada.id}"
      aria-expanded="false"
      aria-controls="${contenidoId}"
    >
      <span>${grada.nombre}</span>
      <span class="accordion-icon" aria-hidden="true"></span>
    </button>
  `;
}

function crearTextoPlantasGrada(grada) {
  return `Plantas actuales: ${grada.plantas.join(", ")}.`;
}

function crearControlesJardinAdicional() {
  gradas.filter((grada) => grada.tieneCesped).forEach((grada) => {
    const contenedor = document.getElementById(`${grada.id}-garden-control`);
    const maximo = obtenerMetrosCespedBase(grada);

    contenedor.innerHTML = `
      <label for="${grada.id}-plant-pattern">Diseño de plantas</label>
      <select id="${grada.id}-plant-pattern" data-plant-pattern data-grade="${grada.id}">
        ${crearOpcionesPatronPlantas()}
      </select>
      <div class="plant-choice-legend" id="${grada.id}-plant-legend"></div>
      <label for="${grada.id}-extra-garden">Metros de diseño adicional</label>
      <div class="garden-stepper">
        <button
          class="garden-step-button"
          type="button"
          data-garden-step="-1"
          data-grade="${grada.id}"
          aria-label="Disminuir metros de diseño adicional"
        >-</button>
        <input
          id="${grada.id}-extra-garden"
          type="number"
          min="0"
          max="${maximo}"
          step="1"
          value="${grada.metrosJardinAdicional}"
          data-extra-garden
          data-grade="${grada.id}"
        >
        <button
          class="garden-step-button"
          type="button"
          data-garden-step="1"
          data-grade="${grada.id}"
          aria-label="Aumentar metros de diseño adicional"
        >+</button>
      </div>
      <small id="${grada.id}-garden-help">Césped disponible: ${formatoNumero(maximo)} m.</small>
    `;
  });
}

function conectarEventosControles() {
  elementos.controlsContainer.addEventListener("click", (event) => {
    const botonAcordeon = event.target.closest("[data-accordion-trigger]");
    if (botonAcordeon) {
      alternarAcordeonGrada(botonAcordeon);
      return;
    }

    const botonJardin = event.target.closest("[data-garden-step]");
    if (botonJardin) {
      manejarClickPasoJardin(botonJardin);
      return;
    }

    const boton = event.target.closest("[data-pattern]");
    if (!boton) return;

    const grada = gradas.find((item) => item.id === boton.closest("[data-grade-pattern]").dataset.gradePattern);
    aplicarPatronOnda(grada, boton.dataset.pattern);
  });

  elementos.controlsContainer.addEventListener("input", manejarCambioJardinAdicional);
  elementos.controlsContainer.addEventListener("change", manejarCambioJardinAdicional);
  elementos.controlsContainer.addEventListener("change", manejarCambioPatronPlantas);
}

function alternarAcordeonGrada(boton) {
  const estaAbierto = boton.getAttribute("aria-expanded") === "true";
  const siguienteEstado = !estaAbierto;
  const contenido = document.getElementById(boton.getAttribute("aria-controls"));

  boton.setAttribute("aria-expanded", String(siguienteEstado));

  if (contenido) {
    contenido.hidden = !siguienteEstado;
  }
}

function conectarEventosVisuales() {
  elementos.gradesContainer.addEventListener("click", (event) => {
    const boton = event.target.closest("[data-invert-colors]");
    if (!boton) return;

    const grada = gradas.find((item) => item.id === boton.dataset.invertColors);
    if (!grada) return;

    grada.coloresInvertidos = !grada.coloresInvertidos;
    actualizarBotonInvertirColor(grada);
    aplicarSegmentosCesped(grada);
  });
}

function actualizarBotonInvertirColor(grada) {
  const boton = document.querySelector(`[data-invert-colors="${grada.id}"]`);
  if (!boton) return;

  boton.classList.toggle("is-active", Boolean(grada.coloresInvertidos));
  boton.setAttribute("aria-pressed", String(Boolean(grada.coloresInvertidos)));
}

function manejarCambioPatronPlantas(event) {
  const select = event.target.closest("[data-plant-pattern]");
  if (!select) return;
  if (!select.value) return;

  const grada = gradas.find((item) => item.id === select.dataset.grade);
  grada.patronPlantas = select.value;
  aplicarSegmentosCesped(grada);
}

function manejarCambioJardinAdicional(event) {
  const input = event.target.closest("[data-extra-garden]");
  if (!input) return;

  const grada = gradas.find((item) => item.id === input.dataset.grade);
  const metros = Math.floor(Number(input.value) || 0);
  actualizarMetrosJardinAdicional(grada, metros);
}

function manejarClickPasoJardin(boton) {
  const grada = gradas.find((item) => item.id === boton.dataset.grade);
  if (!grada) return;

  const paso = Number(boton.dataset.gardenStep) || 0;
  actualizarMetrosJardinAdicional(grada, grada.metrosJardinAdicional + paso);
}

function actualizarMetrosJardinAdicional(grada, metros) {
  const input = document.getElementById(`${grada.id}-extra-garden`);
  grada.metrosJardinAdicional = limitarNumero(Math.floor(Number(metros) || 0), 0, obtenerMetrosCespedBase(grada));

  if (input) {
    input.value = grada.metrosJardinAdicional;
  }

  aplicarSegmentosCesped(grada);
  actualizarTextoControlJardin(grada);
}

function conectarEventosPdf() {
  elementos.previewPdfButton.addEventListener("click", previsualizarPDF);
  elementos.downloadPdfButton.addEventListener("click", descargarPDF);

  elementos.pdfModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      cerrarModalPdf();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      cerrarModalPdf();
    }
  });
}

function renderizarLeyenda() {
  if (!elementos.legend) return;

  const items = [
    PLANTAS.cesped,
    PLANTAS.agapantoAzul,
    PLANTAS.escancelRojo,
    PLANTAS.espigaVerde,
    PLANTAS.espigaRoja,
    PLANTAS.lavanda,
    PLANTAS.margaritaMorada,
    PLANTAS.vinca,
    PLANTAS.vacio
  ];

  elementos.legend.innerHTML = items
    .map((item) => `
      <span class="legend-item">
        <span class="legend-swatch" style="background:${item.color}"></span>
        ${item.nombre}
      </span>
    `)
    .join("");
}

function renderizarCondiciones() {
  elementos.commercialConditions.innerHTML = CONDICIONES_COMERCIALES
    .map((condicion) => `<li>${condicion}</li>`)
    .join("");
}

function asignarTipoPunto(punto, datos) {
  punto.tipo = datos.tipo;
  punto.planta = datos.planta;
  punto.precioTipo = datos.precioTipo;
  punto.esCesped = datos.esCesped;
  punto.esJardinAdicional = datos.esJardinAdicional || false;

  punto.elemento.dataset.tipo = datos.tipo;
  punto.elemento.dataset.planta = datos.plantaSlug;
  punto.elemento.removeAttribute("title");
}

function aplicarFilaVinca(grada) {
  if (!grada.filaVinca) return;

  grada.puntos
    .filter((punto) => punto.fila === grada.filaVinca)
    .forEach((punto) => {
      asignarTipoPunto(punto, {
        tipo: "planta",
        planta: PLANTAS.vinca.nombre,
        plantaSlug: PLANTAS.vinca.slug,
        precioTipo: "plantas",
        esCesped: false,
        esJardinAdicional: false
      });
    });
}

function obtenerPlantaDeJardin(punto, patronConfig, origenColumna = 1, grada = null, segmento = null) {
  const columnaRelativa = Math.max(punto.columna - origenColumna, 0);
  const bloqueMetro = Math.floor(columnaRelativa / CONFIG.columnasPorMetro);
  const fila = punto.filaNumero - 1;
  const plantas = patronConfig.plantas;
  let indice = 0;

  if (debeUsarBloqueMorado(patronConfig, grada, segmento)) {
    return obtenerPlantaConColorInvertido(obtenerPlantaMoradaPorFila(punto), grada);
  }

  if (patronConfig.tipo === "onda") {
    return obtenerPlantaConColorInvertido(obtenerPlantaOndaPorFila(punto, patronConfig, grada), grada);
  }

  if (patronConfig.mapa) {
    const filaMapa = patronConfig.mapa[Math.min(fila, patronConfig.mapa.length - 1)];
    const columnaMapa = patronConfig.repetirPorMetro ? bloqueMetro : columnaRelativa;
    const codigo = filaMapa[columnaMapa % filaMapa.length];
    const planta = codigo === "R" ? PLANTAS.espigaRoja : PLANTAS.espigaVerde;
    return obtenerPlantaConColorInvertido(planta, grada);
  }

  if (patronConfig.nombre === "Opción 3") {
    indice = (Math.floor(bloqueMetro / 2) + Math.floor(fila / 3)) % plantas.length;
  } else {
    indice = (bloqueMetro + fila) % plantas.length;
  }

  return obtenerPlantaConColorInvertido(plantas[indice], grada);
}

function obtenerPlantaConColorInvertido(planta, grada) {
  if (!grada || !grada.coloresInvertidos) return planta;

  const pares = {
    [PLANTAS.espigaVerde.slug]: PLANTAS.espigaRoja,
    [PLANTAS.espigaRoja.slug]: PLANTAS.espigaVerde,
    [PLANTAS.lavanda.slug]: PLANTAS.margaritaMorada,
    [PLANTAS.margaritaMorada.slug]: PLANTAS.lavanda,
    [PLANTAS.salviaBicolor.slug]: PLANTAS.quinceaneraRastrera,
    [PLANTAS.quinceaneraRastrera.slug]: PLANTAS.salviaBicolor
  };

  return pares[planta.slug] || planta;
}

function debeUsarBloqueMorado(patronConfig, grada, segmento) {
  if (!grada || !segmento) return false;
  if (patronConfig.nombre !== "Opción 1") return false;

  if (grada.id === "grada-2") {
    return segmento.indice === 3;
  }

  if (grada.id === "grada-1") {
    return segmento.indice === 2 || segmento.indice === 4;
  }

  return false;
}

function obtenerPlantaMoradaPorFila(punto) {
  if (punto.filaNumero <= 2) return PLANTAS.lavanda;
  if (punto.filaNumero <= 4) return PLANTAS.salviaMorada;

  return PLANTAS.margaritaMorada;
}

function obtenerPlantaOndaPorFila(punto, patronConfig, grada) {
  const filasDisponibles = Math.max((grada ? grada.filas : punto.filaNumero) - 1, 1);
  const filaMinima = 1;
  const filaMaxima = filasDisponibles;
  const centroOnda = (filaMinima + filaMaxima) / 2;
  const amplitud = (filaMaxima - filaMinima) / 2;
  const avance = punto.columna / (grada ? grada.columnas : punto.columna);
  const onda = Math.sin(avance * Math.PI * patronConfig.onda.frecuencia + patronConfig.onda.fase);
  const limiteSalvia = limitarNumero(Math.round(centroOnda + onda * amplitud), filaMinima, filaMaxima);

  return punto.filaNumero <= limiteSalvia ? PLANTAS.salviaBicolor : PLANTAS.quinceaneraRastrera;
}

function obtenerOrigenPatronPlantas(segmento, esJardinAdicional, columnasJardinAdicional) {
  if (!segmento) return 1;
  if (!esJardinAdicional) return segmento.inicioColumna;

  for (let columna = segmento.inicioColumna; columna <= segmento.finColumna; columna += 1) {
    if (columnasJardinAdicional.has(columna)) return columna;
  }

  return segmento.inicioColumna;
}

function crearOpcionesPatronPlantas() {
  const opciones = Object.entries(PATRONES_PLANTAS).map(([valor, opcion]) => `
    <option value="${valor}">${opcion.nombre}</option>
  `).join("");

  return `<option value="" selected disabled>Selecciona una opción</option>${opciones}`;
}

function obtenerConfigPatronPlantas(valor = "opcion-1") {
  return PATRONES_PLANTAS[valor] || PATRONES_PLANTAS["opcion-1"];
}

function crearLeyendaPatronPlantas(grada) {
  return obtenerPlantasVisiblesGrada(grada).map((planta) => `
    <span class="plant-choice-item">
      <span class="plant-choice-swatch" style="background:${planta.color}"></span>
      ${planta.nombre}
    </span>
  `).join("");
}

function actualizarLeyendaPatronPlantas(grada) {
  const contenedor = document.getElementById(`${grada.id}-plant-legend`);
  if (!contenedor) return;

  contenedor.innerHTML = crearLeyendaPatronPlantas(grada);
}

function actualizarGaleriaPlantas(grada) {
  const contenedor = document.getElementById(`${grada.id}-plant-gallery`);
  if (!contenedor) return;

  const plantas = obtenerPlantasVisiblesGrada(grada).filter((planta) => planta.imagen);
  contenedor.innerHTML = "";
  contenedor.hidden = plantas.length === 0;

  plantas.forEach((planta) => {
    const card = document.createElement("figure");
    card.className = "plant-photo-card";
    card.style.setProperty("--plant-color", planta.color);

    const image = document.createElement("img");
    image.src = planta.imagen;
    image.alt = planta.nombre;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = planta.nombre;

    card.appendChild(image);
    card.appendChild(caption);
    contenedor.appendChild(card);
  });
}

function obtenerPlantasVisiblesGrada(grada, opciones = {}) {
  const plantas = [];

  grada.puntos.forEach((punto) => {
    if (punto.tipo !== "planta") return;
    if (opciones.soloBase && punto.esJardinAdicional) return;
    if (opciones.soloJardinAdicional && !punto.esJardinAdicional) return;

    const planta = obtenerPlantaPorNombre(punto.planta);
    if (!planta) return;
    if (plantas.some((item) => item.slug === planta.slug)) return;

    plantas.push(planta);
  });

  return plantas;
}

function obtenerPlantaPorNombre(nombre) {
  return Object.values(PLANTAS).find((planta) => planta.nombre === nombre);
}

function calcularBloquesGrada(grada) {
  const totalBloques = grada.columnas / CONFIG.columnasPorMetro;
  const bloquesCespedBase = grada.tieneCesped ? obtenerMetrosCespedBase(grada) : 0;
  const bloquesJardinAdicional = grada.tieneCesped ? normalizarMetrosJardinAdicional(grada) : 0;
  const bloquesCesped = Math.max(bloquesCespedBase - bloquesJardinAdicional, 0);
  const bloquesPlantasBase = totalBloques - bloquesCespedBase;
  const bloquesPlantas = bloquesPlantasBase + bloquesJardinAdicional;

  return {
    id: grada.id,
    nombre: grada.nombre,
    largoMetros: grada.largoMetros,
    anchoMetros: grada.anchoMetros,
    filas: grada.filas,
    columnas: grada.columnas,
    bloquesTotales: totalBloques,
    bloquesPlantasBase,
    bloquesPlantas,
    bloquesCesped,
    bloquesCespedBase,
    bloquesJardinAdicional,
    subtotalBase: totalBloques * CONFIG.precioBloqueLineal,
    subtotalJardinAdicional: bloquesJardinAdicional * CONFIG.precioMetroJardinAdicional,
    subtotal: (totalBloques * CONFIG.precioBloqueLineal) + (bloquesJardinAdicional * CONFIG.precioMetroJardinAdicional)
  };
}

function obtenerRangosSegmentos(grada) {
  const rangos = [];
  let columnaActual = 1;
  const segmentosColumnas = grada.segmentosColumnas || grada.segmentos.map((metros) => metros * CONFIG.columnasPorMetro);

  segmentosColumnas.forEach((columnas, indice) => {
    if (columnaActual > grada.columnas) return;

    const columnasSolicitadas = columnas;
    const columnasDisponibles = grada.columnas - columnaActual + 1;
    const columnasEfectivas = Math.min(columnasSolicitadas, columnasDisponibles);
    const inicioColumna = columnaActual;
    const finColumna = columnaActual + columnasEfectivas - 1;

    rangos.push({
      indice,
      columnasSolicitadas,
      metrosSolicitados: columnasSolicitadas / CONFIG.columnasPorMetro,
      metrosEfectivos: columnasEfectivas / CONFIG.columnasPorMetro,
      inicioColumna,
      finColumna
    });

    columnaActual = finColumna + 1;
  });

  return rangos;
}

function obtenerMetrosCespedBase(grada) {
  return obtenerRangosSegmentos(grada)
    .filter((rango) => grada.segmentosCespedActivos.has(rango.indice))
    .reduce((total, rango) => total + rango.metrosEfectivos, 0);
}

function normalizarMetrosJardinAdicional(grada) {
  const maximo = obtenerMetrosCespedBase(grada);
  grada.metrosJardinAdicional = limitarNumero(Math.floor(Number(grada.metrosJardinAdicional) || 0), 0, maximo);
  return grada.metrosJardinAdicional;
}

function obtenerColumnasJardinAdicional(grada) {
  if (grada.id === "grada-1") {
    return obtenerColumnasJardinAdicionalGrada1(grada);
  }

  const columnas = new Set();
  let metrosPendientes = normalizarMetrosJardinAdicional(grada);
  const frentes = obtenerFrentesCespedParaJardin(grada);
  let indiceFrente = 0;

  while (metrosPendientes > 0 && frentes.some((frente) => frente.bloquesConvertidos < frente.bloquesDisponibles)) {
    const frente = frentes[indiceFrente % frentes.length];
    indiceFrente += 1;

    if (frente.bloquesConvertidos >= frente.bloquesDisponibles) continue;

    obtenerColumnasBloqueFrente(frente).forEach((columna) => columnas.add(columna));
    frente.bloquesConvertidos += 1;
    metrosPendientes -= 1;
  }

  return columnas;
}

function obtenerColumnasJardinAdicionalGrada1(grada) {
  const columnas = new Set();
  let metrosPendientes = normalizarMetrosJardinAdicional(grada);
  const rangos = obtenerRangosSegmentos(grada);
  const rangoCentral = rangos.find((rango) => rango.metrosEfectivos === 15 && grada.segmentosCespedActivos.has(rango.indice));

  if (!rangoCentral) return columnas;

  const metrosParaDejarCentralEn7 = 8;
  const metrosCentroPrimeraFase = Math.min(metrosPendientes, metrosParaDejarCentralEn7);
  agregarColumnasAlternandoLados(columnas, rangoCentral, metrosCentroPrimeraFase);
  metrosPendientes -= metrosCentroPrimeraFase;

  if (metrosPendientes <= 0) return columnas;

  const otrosFrentes = obtenerFrentesCespedParaJardin(grada)
    .filter((frente) => frente.inicioColumna !== rangoCentral.inicioColumna || frente.finColumna !== rangoCentral.finColumna);
  let indiceFrente = 0;

  while (metrosPendientes > 0 && otrosFrentes.some((frente) => frente.bloquesConvertidos < frente.bloquesDisponibles)) {
    const frente = otrosFrentes[indiceFrente % otrosFrentes.length];
    indiceFrente += 1;

    if (frente.bloquesConvertidos >= frente.bloquesDisponibles) continue;

    obtenerColumnasBloqueFrente(frente).forEach((columna) => columnas.add(columna));
    frente.bloquesConvertidos += 1;
    metrosPendientes -= 1;
  }

  if (metrosPendientes > 0) {
    agregarColumnasAlternandoLados(columnas, rangoCentral, metrosParaDejarCentralEn7 + metrosPendientes);
  }

  return columnas;
}

function agregarColumnasAlternandoLados(columnas, rango, bloquesSolicitados) {
  const bloquesDisponibles = Math.floor((rango.finColumna - rango.inicioColumna + 1) / CONFIG.columnasPorMetro);
  const bloques = limitarNumero(Math.floor(bloquesSolicitados), 0, bloquesDisponibles);

  for (let bloque = 0; bloque < bloques; bloque += 1) {
    const desdeIzquierda = bloque % 2 === 0;
    const pasosDesdeBorde = Math.floor(bloque / 2) * CONFIG.columnasPorMetro;
    const inicio = desdeIzquierda
      ? rango.inicioColumna + pasosDesdeBorde
      : rango.finColumna - pasosDesdeBorde - CONFIG.columnasPorMetro + 1;
    const fin = inicio + CONFIG.columnasPorMetro - 1;

    for (let columna = inicio; columna <= fin; columna += 1) {
      columnas.add(columna);
    }
  }
}

function obtenerFrentesCespedParaJardin(grada) {
  const rangos = obtenerRangosSegmentos(grada);

  return rangos
    .filter((rango) => grada.segmentosCespedActivos.has(rango.indice))
    .map((rango) => {
      const rangoAnterior = rangos.find((item) => item.indice === rango.indice - 1);
      const rangoSiguiente = rangos.find((item) => item.indice === rango.indice + 1);
      const tieneJardinALaDerecha = rangoSiguiente && !grada.segmentosCespedActivos.has(rangoSiguiente.indice);
      const tieneJardinALaIzquierda = rangoAnterior && !grada.segmentosCespedActivos.has(rangoAnterior.indice);

      return {
        inicioColumna: rango.inicioColumna,
        finColumna: rango.finColumna,
        direccion: tieneJardinALaDerecha || !tieneJardinALaIzquierda ? "derecha-a-izquierda" : "izquierda-a-derecha",
        bloquesDisponibles: Math.floor((rango.finColumna - rango.inicioColumna + 1) / CONFIG.columnasPorMetro),
        bloquesConvertidos: 0
      };
    });
}

function obtenerColumnasBloqueFrente(frente) {
  const columnas = [];
  const desplazamiento = frente.bloquesConvertidos * CONFIG.columnasPorMetro;
  const inicio = frente.direccion === "derecha-a-izquierda"
    ? frente.finColumna - desplazamiento - CONFIG.columnasPorMetro + 1
    : frente.inicioColumna + desplazamiento;
  const fin = Math.min(inicio + CONFIG.columnasPorMetro - 1, frente.finColumna);

  for (let columna = Math.max(inicio, frente.inicioColumna); columna <= fin; columna += 1) {
    columnas.push(columna);
  }

  return columnas;
}

function actualizarEtiquetasCesped(grada) {
  const contenedor = document.getElementById(`${grada.id}-grass-labels`);
  if (!contenedor) return;

  contenedor.innerHTML = "";
  if (!grada.tieneCesped) return;

  obtenerRangosCespedActuales(grada).forEach((rango) => {
    const etiqueta = document.createElement("span");
    etiqueta.className = "grass-label";
    etiqueta.style.gridColumn = `${rango.inicioColumna} / span ${rango.columnas}`;
    etiqueta.textContent = `${formatoNumero(rango.columnas / CONFIG.columnasPorMetro)} m césped`;
    contenedor.appendChild(etiqueta);
  });
}

function obtenerRangosCespedActuales(grada) {
  const columnasJardinAdicional = obtenerColumnasJardinAdicional(grada);
  const rangos = [];

  obtenerRangosSegmentos(grada)
    .filter((rango) => grada.segmentosCespedActivos.has(rango.indice))
    .forEach((rango) => {
      let inicio = null;

      for (let columna = rango.inicioColumna; columna <= rango.finColumna; columna += 1) {
        const esCesped = !columnasJardinAdicional.has(columna);

        if (esCesped && inicio === null) {
          inicio = columna;
        }

        if ((!esCesped || columna === rango.finColumna) && inicio !== null) {
          const fin = esCesped && columna === rango.finColumna ? columna : columna - 1;
          rangos.push({
            inicioColumna: inicio,
            columnas: fin - inicio + 1
          });
          inicio = null;
        }
      }
    });

  return rangos;
}

function obtenerRangosCespedConAdvertencia(grada) {
  if (!grada.tieneCesped) return [];

  return obtenerRangosCespedActuales(grada)
    .map((rango) => ({
      ...rango,
      metros: rango.columnas / CONFIG.columnasPorMetro
    }))
    .filter((rango) => rango.metros > 6);
}

function tieneAdvertenciaCesped(grada) {
  return obtenerRangosCespedConAdvertencia(grada).length > 0;
}

function actualizarAdvertenciaCesped(grada) {
  const contenedor = document.getElementById(`${grada.id}-grass-warning`);
  const nota = document.getElementById(`${grada.id}-grass-warning-note`);
  if (!contenedor || !nota) return;

  const rangos = obtenerRangosCespedConAdvertencia(grada);
  const debeMostrar = rangos.length > 0;
  contenedor.hidden = !debeMostrar;

  if (!debeMostrar) {
    nota.innerHTML = "";
    return;
  }

  const metros = rangos.map((rango) => `${formatoNumero(rango.metros)} m`).join(", ");
  nota.innerHTML = `
    <strong>Nota sobre césped continuo</strong>
    <p>${NOTA_CESPED_CONTINUO}</p>
    <small>Tramos actuales mayores a 6 m: ${metros}.</small>
  `;
}

function actualizarTextoControlJardin(grada) {
  const ayuda = document.getElementById(`${grada.id}-garden-help`);
  if (!ayuda) return;

  const cespedActual = obtenerMetrosCespedBase(grada) - normalizarMetrosJardinAdicional(grada);
  ayuda.textContent = `Césped restante: ${formatoNumero(cespedActual)} m. Diseño adicional: ${formatoNumero(grada.metrosJardinAdicional)} m.`;
}

function crearTablaPlantasPdf(resumen) {
  const gradasConJardinAdicional = gradas.filter((grada) => grada.tieneCesped && normalizarMetrosJardinAdicional(grada) > 0);
  const totalFilasDetalle = gradas.length + gradasConJardinAdicional.length;
  const filasBase = gradas.map((grada, indice) => {
    const celdaDetalles = indice === 0
      ? `<td rowspan="${totalFilasDetalle}" class="pdf-details-cell">${DETALLE_TRABAJO_PDF}</td>`
      : "";
    const celdaPrecio = indice === 0
      ? `<td rowspan="${gradas.length}" class="pdf-price-total-cell">${formatoMoneda(resumen.subtotalBase)}</td>`
      : "";

    return `
      <tr>
        <td>${obtenerNombresPlantasPorGradaPdf(grada, { soloBase: true })}</td>
        ${celdaDetalles}
        <td>${obtenerNombreJardinPdf(grada)}</td>
        <td>${obtenerOpcionSeleccionadaPdf(grada)}</td>
        ${celdaPrecio}
      </tr>
    `;
  }).join("");
  const filasJardinAdicional = gradasConJardinAdicional
    .map((grada) => {
      const metrosAdicionales = normalizarMetrosJardinAdicional(grada);

      return `
        <tr class="pdf-extra-garden-row">
          <td>${obtenerNombresPlantasPorGradaPdf(grada, { soloJardinAdicional: true })}</td>
          <td>${obtenerNombreJardinPdf(grada)} - Diseño adicional</td>
          <td>${obtenerOpcionSeleccionadaPdf(grada)}</td>
          <td>${formatoMoneda(metrosAdicionales * CONFIG.precioMetroJardinAdicional)}</td>
        </tr>
      `;
    }).join("");

  return `
    <table class="pdf-table">
      <thead>
        <tr>
          <th>Plantas</th>
          <th>Detalles</th>
          <th>Jardin</th>
          <th>Opción seleccionada</th>
          <th>Precio Final</th>
        </tr>
      </thead>
      <tbody>
        ${filasBase}
        ${filasJardinAdicional}
      </tbody>
    </table>
  `;
}

function crearTablaTotalesPdf(resumen) {
  const subtotal = resumen.subtotalGeneral;
  const iva = subtotal * CONFIG.iva;
  const total = subtotal + iva;

  return `
    <table class="pdf-table pdf-totals-table">
      <tbody>
        <tr>
          <td>Subtotal</td>
          <td>${formatoMoneda(subtotal)}</td>
        </tr>
        <tr>
          <td>IVA 15%</td>
          <td>${formatoMoneda(iva)}</td>
        </tr>
        <tr class="pdf-total-row">
          <td>Total</td>
          <td>${formatoMoneda(total)}</td>
        </tr>
      </tbody>
    </table>
  `;
}

function obtenerNombresPlantasPdf() {
  const nombres = [];

  gradas.forEach((grada) => {
    grada.puntos.forEach((punto) => {
      if (punto.tipo !== "planta") return;
      if (!punto.planta || punto.planta === PLANTAS.vacio.nombre) return;
      if (!nombres.includes(punto.planta)) {
        nombres.push(punto.planta);
      }
    });
  });

  return nombres.join(", ");
}

function obtenerNombresPlantasPorGradaPdf(grada, opciones = {}) {
  return obtenerPlantasVisiblesGrada(grada, opciones)
    .map((planta) => planta.nombre)
    .join(", ");
}

function obtenerNombreJardinPdf(grada) {
  const nombres = {
    "grada-3": "Superior",
    "grada-2": "Intermedia",
    "grada-1": "Inferior"
  };

  return nombres[grada.id] || grada.nombre;
}

function obtenerOpcionSeleccionadaPdf(grada) {
  if (grada.id === "grada-3") {
    return grada.patronActivo === "onda-rojo-azul" ? "Ondas rojo / azul" : "Ondas azul / rojo";
  }

  return obtenerConfigPatronPlantas(grada.patronPlantas).nombre;
}

function crearCondicionesPdf(resumen) {
  const condiciones = [
    `Anticipo requerido: 50% (${formatoMoneda(resumen.anticipoValor)}).`,
    `Saldo restante: 50% (${formatoMoneda(resumen.saldoValor)}), con crédito de hasta 30 días.`,
    "Una vez confirmado el anticipo, necesitamos 3 días para gestionar compra y traslado de plantas, tierra y materiales.",
    "El inicio del proyecto sería en 4 días hábiles posterior al anticipo.",
    "El tiempo estimado para realizar el trabajo es de 15 días hábiles."
  ];

  return condiciones.map((condicion) => `<li>${condicion}</li>`).join("");
}

function actualizarAdvertenciasCespedPdf(documento) {
  const contenedor = documento.querySelector("#pdfGrassWarnings");
  if (!contenedor) return;

  const advertencias = gradas
    .filter((grada) => grada.tieneCesped)
    .map((grada) => ({
      grada,
      rangos: obtenerRangosCespedConAdvertencia(grada)
    }))
    .filter((item) => item.rangos.length > 0);

  contenedor.hidden = advertencias.length === 0;
  if (advertencias.length === 0) {
    contenedor.innerHTML = "";
    return;
  }

  const detalle = advertencias.map((item) => {
    const metros = item.rangos.map((rango) => `${formatoNumero(rango.metros)} m`).join(", ");
    return `<li>${item.grada.nombre}: ${metros} continuos de césped.</li>`;
  }).join("");

  contenedor.innerHTML = `
    <strong>Nota sobre césped continuo</strong>
    <p>${NOTA_CESPED_CONTINUO}</p>
    <ul>${detalle}</ul>
  `;
}

function crearVisualResumenPdf() {
  return gradas.map((grada) => {
    const segmentos = obtenerSegmentosVisuales(grada);
    const htmlSegmentos = segmentos.map((segmento) => `
      <span class="pdf-segment" style="width:${segmento.porcentaje}%;background:${segmento.color}" title="${segmento.nombre}"></span>
    `).join("");

    return `
      <div class="pdf-visual-grade">
        <div class="pdf-visual-title">${grada.nombre}</div>
        <div class="pdf-segment-bar">${htmlSegmentos}</div>
      </div>
    `;
  }).join("");
}

function obtenerSegmentosVisuales(grada) {
  if (grada.id === "grada-3") {
    const rojoPrimero = grada.patronActivo === "onda-rojo-azul";
    return [
      {
        nombre: rojoPrimero ? "Escancel rojo" : "Agapanto azul",
        color: rojoPrimero ? COLORES.escancelRojo : COLORES.agapantoAzul,
        porcentaje: 50
      },
      {
        nombre: rojoPrimero ? "Agapanto azul" : "Escancel rojo",
        color: rojoPrimero ? COLORES.agapantoAzul : COLORES.escancelRojo,
        porcentaje: 50
      }
    ];
  }

  const columnasJardinAdicional = obtenerColumnasJardinAdicional(grada);
  const segmentos = [];
  let segmentoActual = null;

  for (let columna = 1; columna <= grada.columnas; columna += 1) {
    const rango = obtenerRangosSegmentos(grada).find((item) => columna >= item.inicioColumna && columna <= item.finColumna);
    const esCespedBase = rango ? grada.segmentosCespedActivos.has(rango.indice) : false;
    const esJardinAdicional = esCespedBase && columnasJardinAdicional.has(columna);
    const nombre = esCespedBase && !esJardinAdicional ? "Césped" : esJardinAdicional ? "Diseño adicional" : "Jardín/plantas";
    const color = esCespedBase && !esJardinAdicional ? COLORES.cesped : esJardinAdicional ? COLORES.vinca : COLORES.lavanda;

    if (!segmentoActual || segmentoActual.nombre !== nombre) {
      segmentoActual = { nombre, color, columnas: 0 };
      segmentos.push(segmentoActual);
    }

    segmentoActual.columnas += 1;
  }

  return segmentos.map((segmento) => ({
    nombre: segmento.nombre,
    color: segmento.color,
    porcentaje: (segmento.columnas / grada.columnas) * 100
  }));
}

function abrirModalPdf() {
  elementos.pdfModal.classList.add("is-open");
  elementos.pdfModal.setAttribute("aria-hidden", "false");
}

function cerrarModalPdf() {
  elementos.pdfModal.classList.remove("is-open");
  elementos.pdfModal.setAttribute("aria-hidden", "true");
}

function marcarBotonActivo(gradaId, patron) {
  const botones = elementos.controlsContainer.querySelectorAll(`[data-grade-pattern="${gradaId}"] [data-pattern]`);
  botones.forEach((boton) => {
    boton.classList.toggle("is-active", boton.dataset.pattern === patron);
  });
}

function obtenerLetraFila(numero) {
  return String.fromCharCode(64 + numero);
}

function limitarNumero(valor, minimo, maximo) {
  return Math.min(Math.max(valor, minimo), maximo);
}

function formatoMoneda(valor) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: CONFIG.moneda
  }).format(valor);
}

function formatoNumero(valor) {
  return new Intl.NumberFormat("es-EC", {
    maximumFractionDigits: 2
  }).format(valor);
}

function obtenerFechaArchivo() {
  return new Date().toISOString().slice(0, 10);
}

function formatearFechaLarga(fecha) {
  return fecha.toLocaleDateString("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function obtenerFechaValidezCotizacion(fechaBase) {
  const fechaValidez = new Date(fechaBase);
  fechaValidez.setMonth(fechaValidez.getMonth() + 1);
  return fechaValidez;
}
