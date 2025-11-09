// Proyectos con sus categorías
const proyectos = [
  { img: "/assets/img/estructura.jpg", titulo: "Estructura metálica para nave industrial", categoria: "estructuras" },
  { img: "/assets/img/estructura_2.jpg", titulo: "Estructura metálica para centro comercial", categoria: "estructuras" },
  { img: "/assets/img/estructura_3.jpg", titulo: "Estructura metálica para vivienda", categoria: "estructuras" },
  { img: "/assets/img/pergola_jardin.jpg", titulo: "Pérgola Bioclimática en Acero Corten", categoria: "pergolas" },
  { img: "/assets/img/pergola_patio.jpg", titulo: "Pérgola para patio moderno", categoria: "pergolas" },
  { img: "/assets/img/puerta_apto.jpg", titulo: "Puerta para apartamento", categoria: "puertas" },
  { img: "/assets/img/puerta_doble.jpg", titulo: "Puerta de garaje seccional en gris antracita", categoria: "puertas" },
  { img: "/assets/img/escalera_caracol.jpg", titulo: "Escalera de caracol con pasamanos de acero", categoria: "estructuras" },
  { img: "/assets/img/porton.jpg", titulo: "Valla perimetral de diseño moderno", categoria: "puertas" },
  { img: "/assets/img/porche.jpg", titulo: "Porche con estructura de vigas de acero", categoria: "pergolas" },
  { img: "/assets/img/estructura_fachada.jpg", titulo: "Estructura para fachada acristalada", categoria: "estructuras" },
  { img: "/assets/img/puerta_corredera.jpg", titulo: "Puerta corredera de acero para finca rústica", categoria: "puertas" },
  { img: "/assets/img/candelabro.jpg", titulo: "Figura metálica decorativa", categoria: "medida" },
  { img: "/assets/img/cocina industrial.jpg", titulo: "Cocinas integrales tipo industrial", categoria: "medida" },
  { img: "/assets/img/silla_metalica.jpg", titulo: "Estructura para mueble tipo industrial", categoria: "medida" },
];

// Referencias DOM
const galeria = document.getElementById("galeria");
const botones = document.querySelectorAll("nav button");

// ✅ Función para renderizar los proyectos
function mostrarProyectos(categoria = "todos") {
  galeria.innerHTML = "";
  const filtrados =
    categoria === "todos"
      ? proyectos
      : proyectos.filter((p) => p.categoria === categoria);

  filtrados.forEach((p) => {
    const fig = document.createElement("figure");
    fig.innerHTML = `
      <img src="${p.img}" alt="${p.titulo}">
      <figcaption>${p.titulo}</figcaption>
    `;
    galeria.appendChild(fig);
  });
}

// ✅ Mostrar todos los proyectos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarProyectos();

  // Activar botón "Todos" por defecto
  const btnTodos = document.querySelector('button[data-category="todos"]');
  if (btnTodos) btnTodos.classList.add("activo");
});

// ✅ Filtrado al hacer clic en los botones
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    botones.forEach((btn) => btn.classList.remove("activo"));
    boton.classList.add("activo");
    mostrarProyectos(boton.dataset.category);
  });
});

// ✅ Función reutilizable para ir a la página de contacto
function irAContacto() {
  window.location.href = "/contacto.html";
}

// ✅ Función reutilizable para ir a la página de proyectos
function irAProyectos() {
  window.location.href = "/proyectos.html";
}

// ✅ Acción del botón "Ver Proyectos"
const btnProyectos = document.getElementById("btnProyectos");
if (btnProyectos) {
  btnProyectos.addEventListener("click", irAProyectos);
}

// ✅ Href de redes sociales
const instagram = document.getElementById("linkInstagram");
const facebook = document.getElementById("linkFacebook");

if (instagram)
  instagram.href = "https://www.instagram.com/leonardo.zam79/";
if (facebook)
  facebook.href = "https://www.facebook.com/Leozambranodev";
