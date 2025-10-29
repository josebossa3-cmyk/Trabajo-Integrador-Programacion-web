// menu hamburguesa (hay que cambiar el icono en el html pq no hay que utilizar fontawesome)
function menuHamburguesa() {
  const x = document.getElementById("navbar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

// aca podes cargar las peliclas por genero
const peliculas = {
  Aventura: [
    {
      titulo: "Indiana Jones y el Dial del Destino",
      director: "James Mangold",
      año: 2023,
      imdb: 6.9,
      descripcion:
        "El arqueólogo más famoso vuelve para una última aventura llena de misterios antiguos.",
      imagen: "./src/img/indiana-jones.jpeg",
    },
    {
      titulo: "Jungle Cruise",
      director: "Jaume Collet-Serra",
      año: 2021,
      imdb: 6.7,
      descripcion:
        "Una travesía mágica por el Amazonas en busca de un árbol con poderes curativos.",
      imagen: "./src/img/jungle-cruise.jpeg",
    },
    {
      titulo: "Uncharted",
      director: "Ruben Fleischer",
      año: 2022,
      imdb: 6.3,
      descripcion:
        "Nathan Drake viaja por el mundo buscando tesoros perdidos y secretos ocultos.",
      imagen: "./src/img/uncharted.jpg",
    },
  ],
  Terror: [
    {
      titulo: "Evil Dead Rise",
      director: "Lee Cronin",
      año: 2023,
      imdb: 6.6,
      descripcion:
        "Una familia atrapada en un edificio debe enfrentarse a la posesión demoníaca.",
      imagen: "./src/img/evil-dead-rise.jpg",
    },
    {
      titulo: "The Conjuring",
      director: "James Wan",
      año: 2013,
      imdb: 7.5,
      descripcion:
        "Los investigadores paranormales Ed y Lorraine Warren enfrentan un caso aterrador.",
      imagen: "./src/img/el-conjuro.jpg",
    },
    {
      titulo: "Sweet Home",
      director: "Lee Eung-bok",
      año: 2020,
      imdb: 7.3,
      descripcion:
        "Un grupo de personas intenta sobrevivir a una invasión de monstruos en su edificio.",
      imagen: "./src/img/sweet-home.jpg",
    },
  ],
  Comedia: [
    {
      titulo: "Superbad",
      director: "Greg Mottola",
      año: 2007,
      imdb: 7.6,
      descripcion:
        "Dos amigos intentan disfrutar de su última fiesta antes de terminar la secundaria.",
      imagen: "./src/img/superbad.jpg",
    },
    {
      titulo: "Ted",
      director: "Seth MacFarlane",
      año: 2012,
      imdb: 6.9,
      descripcion:
        "Un oso de peluche malhablado cobra vida y crea problemas a su dueño.",
      imagen: "./src/img/ted.jpg",
    },
    {
      titulo: "Los Cazafantasmas",
      director: "Ivan Reitman",
      año: 1984,
      imdb: 7.8,
      descripcion:
        "Un grupo de científicos abre una empresa para capturar fantasmas en Nueva York.",
      imagen: "./src/img/los-cazafantasmas.jpg",
    },
  ],
};

// elementos del DOM 
const generoLinks = document.querySelectorAll(".generos ul li a");
const listaPopulares = document.querySelector(".carrousel-populares ul");
const listaTop = document.querySelector(".carrousel-top ul");
const generoSpan = document.getElementById("genero-seleccionado");

const detalleGenero = document.querySelector(".detalle-genero");
const detalleTitulo = document.querySelector(".detalle-titulo");
const detalleInfo = document.querySelector(".detalle-info");
const detalleDescripcion = document.querySelector(".detalle-descripcion");
const detalleImagen = document.querySelector(".detalle-imagen");

// funciones

// carga las peloculas del género seleccionado en peliulas populares
function cargarPeliculas(genero) {
  generoSpan.textContent = genero;
  listaPopulares.innerHTML = "";

  const lista = peliculas[genero];
  if (!lista) return;

  lista.forEach((peli, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="#" data-genero="${genero}" data-index="${index}">
        <img src="${peli.imagen}" alt="${peli.titulo}" title="${peli.titulo}">
      </a>`;
    listaPopulares.appendChild(li);
  });
}

// Muestra el detalle de una película seleccionada
function mostrarDetallePorObjeto(peli, generoLabel) {
  if (!peli) return;
  detalleGenero.textContent = generoLabel || peli.genero || "—";
  detalleTitulo.textContent = peli.titulo;
  detalleInfo.textContent = `${peli.director} | ${peli.año} | Rating IMDB: ${
    peli.imdb || peli.rating || "—"
  }`;
  detalleDescripcion.textContent = peli.descripcion;
  detalleImagen.src = peli.imagen || "";
  document
    .querySelector(".pelicula-seleccionada")
    .scrollIntoView({ behavior: "smooth" });
}

// eventos de los links de géneros
generoLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const genero = e.target.textContent.trim();
    // resaltar activo (opcional)
    generoLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");

    cargarPeliculas(genero);
  });
});

// peliculas populares muestra detalle
listaPopulares.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  e.preventDefault();
  const genero = a.dataset.genero;
  const index = Number(a.dataset.index);
  const peli = peliculas[genero] && peliculas[genero][index];
  mostrarDetallePorObjeto(peli, genero);
});


// combina todas las películas en un solo arreglo
function obtenerTodasLasPeliculas() {
  return Object.entries(peliculas).flatMap(([genero, lista]) =>
    lista.map((peli) => ({ ...peli, genero }))
  );
}

// devuelve las X peliculas con mayor puntaje imbd
function obtenerTopPeliculas(cantidad = 5) {
  return obtenerTodasLasPeliculas()
    .sort((a, b) => b.imdb - a.imdb)
    .slice(0, cantidad);
}

// carga las top peliculas en el carrusel
function cargarTopPeliculas() {
  const topPeliculas = obtenerTopPeliculas();
  listaTop.innerHTML = "";

  topPeliculas.forEach((peli, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="#" data-index="${index}">
        <img src="${peli.imagen}" alt="${peli.titulo}" title="${peli.titulo}">
      </a>
    `;
    listaTop.appendChild(li);

    li.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      mostrarDetallePorObjeto(peli, peli.genero);
    });
  });
}

// carrousel para top peliculas 
function initTopCarousel() {
  const slider = document.querySelector(".carrousel-top ul");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (!slider || !prevBtn || !nextBtn) return;

  let index = 0;

  function getItems() {
    return Array.from(slider.children);
  }

  function getGap() {
    const g = getComputedStyle(slider).gap;
    return g ? parseFloat(g) : 20;
  }

  // actualiza la posicion del carrusel
  function update() {
    const items = getItems();
    if (items.length === 0) return;
    const gap = getGap();
    const itemWidth = items[0].offsetWidth;
    const maxIndex = Math.max(0, items.length - 1);
    if (index > maxIndex) index = 0;
    if (index < 0) index = maxIndex;

    const move = index * (itemWidth + gap);
    slider.style.transform = `translateX(-${move}px)`;
    slider.style.transition = "transform 300ms ease";
  }

  // eventos botones prev/next del carrusel
  nextBtn.addEventListener("click", () => {
    const items = getItems();
    const maxIndex = Math.max(0, items.length - 1);
    index = index < maxIndex ? index + 1 : 0;
    update();
  });

  prevBtn.addEventListener("click", () => {
    const items = getItems();
    const maxIndex = Math.max(0, items.length - 1);
    index = index > 0 ? index - 1 : maxIndex;
    update();
  });

  // actualizacion inicial
  update();

  // tambien actualizar si la ventana cambia de tamaño
  window.addEventListener("resize", () => {
    update();
  });
}

// peliculas del top muestra detalle
listaTop.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  e.preventDefault();

  const index = Number(a.dataset.index);
  const peli = topPeliculas[index];
  mostrarDetallePorObjeto(peli, "Top Películas");
});

// revisar si hay pelicula seleccionada en localStorage
const peliculaGuardada = localStorage.getItem("peliculaSeleccionada");
if (peliculaGuardada) {
  const peli = JSON.parse(peliculaGuardada);
  mostrarDetallePorObjeto(peli, peli.genero);
  localStorage.removeItem("peliculaSeleccionada");
}


window.addEventListener("DOMContentLoaded", () => {
  cargarPeliculas("Aventura");
  cargarTopPeliculas();
  initTopCarousel();
});


// modal contacto
const modal = document.getElementById("modal-contacto");
const cerrar = document.querySelector(".cerrar");
const linkContacto = document.getElementById("link-contacto");

// abrir modal
linkContacto.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

// cerrar modal
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// cerrar al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// enviar formulario
document.getElementById("form-contacto").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Gracias por contactarte con nosotros! Te responderemos pronto.");
  modal.style.display = "none";
  e.target.reset();
});