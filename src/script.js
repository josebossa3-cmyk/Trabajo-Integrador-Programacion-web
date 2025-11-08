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
      trailerId: "EVjvIL2joxQ?si=hG9vcJUMUp9nsRll",
    },
    {
      titulo: "Jungle Cruise",
      director: "Jaume Collet-Serra",
      año: 2021,
      imdb: 6.7,
      descripcion:
        "Una travesía mágica por el Amazonas en busca de un árbol con poderes curativos.",
      imagen: "./src/img/jungle-cruise.jpeg",
      trailerId: "mamwmMsJ_lw?si=kC3H8b_FtrdRPeVQ",
    },
    {
      titulo: "Uncharted",
      director: "Ruben Fleischer",
      año: 2022,
      imdb: 6.3,
      descripcion:
        "Nathan Drake viaja por el mundo buscando tesoros perdidos y secretos ocultos.",
      imagen: "./src/img/uncharted.jpg",
      trailerId: "3xOnhOs_rHg?si=mqUXScr1QYTl5RX2",
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
      trailerId: "smTK_AeAPHs?si=46_Dbn55DR-VOGhH",
    },
    {
      titulo: "The Conjuring",
      director: "James Wan",
      año: 2013,
      imdb: 7.5,
      descripcion:
        "Los investigadores paranormales Ed y Lorraine Warren enfrentan un caso aterrador.",
      imagen: "./src/img/el-conjuro.jpg",
      trailerId: "k10ETZ41q5o?si=whB80tjFC8GqOMUQ",
    },
    {
      titulo: "Sweet Home",
      director: "Lee Eung-bok",
      año: 2020,
      imdb: 7.3,
      descripcion:
        "Un grupo de personas intenta sobrevivir a una invasión de monstruos en su edificio.",
      imagen: "./src/img/sweet-home.jpg",
      trailerId: "YXH7XvQ_nQs?si=Q42hllJdxRHNRhon",
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
      trailerId: "4eaZ_48ZYog?si=UdJhDf_IKVWcXxIT",
    },
    {
      titulo: "Ted",
      director: "Seth MacFarlane",
      año: 2012,
      imdb: 6.9,
      descripcion:
        "Un oso de peluche malhablado cobra vida y crea problemas a su dueño.",
      imagen: "./src/img/ted.jpg",
      trailerId: "9fbo_pQvU7M?si=ombppRN-SjupSCOV",
    },
    {
      titulo: "Los Cazafantasmas",
      director: "Ivan Reitman",
      año: 1984,
      imdb: 7.8,
      descripcion:
        "Un grupo de científicos abre una empresa para capturar fantasmas en Nueva York.",
      imagen: "./src/img/los-cazafantasmas.jpg",
      trailerId: "6hDkhw5Wkas?si=pW-j0KxSeRO_XVhF",
    },
  ],
  Romantica: [
    {
      titulo: "Titanic",
      director: "James Cameron",
      año: 1997,
      imdb: 7.9,
      descripcion:
        "Un joven artista y una mujer de clase alta se enamoran a bordo del fatídico Titanic.",
      imagen: "./src/img/titanic.jpg",
      trailerId: "tA_qMdzvCvk?si=ng4daDMRwjCGjNsy",
    },
    {
      titulo: "The Notebook",
      director: "Nick Cassavetes",
      año: 2004,
      imdb: 7.8,
      descripcion:
        "En una historia de amor que trasciende el tiempo, una joven pareja se separa debido a diferencias de clase.",
      imagen: "./src/img/el_diario.jpg",
      trailerId: "BjJcYdEOI0k?si=ojnEgUgIDowhv6mX",
    },
    {
      titulo: "10 Cosas que odio de ti",
      director: "Gil Junger",
      año: 1999,
      imdb: 7.4,
      descripcion:
        "Al descubrir que la chica de sus sueños no puede salir con nadie hasta que su hermana mayor lo haga, un chico idea un plan para conquistarla.",
      imagen: "./src/img/10_cosas.jpg",
      trailerId: "7qOVNX2nbHI?si=TVWtjjP123whWLaJ",
    },
  ],
  Fantasia: [
    {
      titulo: "Harry Potter y el Prisionero de Azkaban",
      director: "Alfonso Cuarón",
      año: 2004,
      imdb: 7.9,
      descripcion:
        "Harry Potter y el prisionero de Azkaban es la tercera entrega de la saga, donde Harry regresa a Hogwarts mientras un peligroso fugitivo, Sirius Black, escapa de Azkaban. A medida que se revelan secretos del pasado, Harry descubre verdades sobre sus padres, la traición que los rodeó y el vínculo que lo une a Sirius",
      imagen: "./src/img/harry_potter.jpg",
      trailerId: "cUtaBkW1MKo?si=gPLIQyIjm1EGTIz8",
    },
    {
      titulo: "El Viaje de Chihiro",
      director: "Hayao Miyazaki",
      año: 2001,
      imdb: 8.6,
      descripcion:
        "Una niña de 10 años llamada Chihiro se adentra en un mundo misterioso gobernado por una bruja, donde quienes no obedecen son transformados en animales.",
      imagen: "./src/img/El_viaje_de_Chihiro.jpg",
      trailerId: "5Fgq4Osh6XQ?si=s20lNNMaBY1cwPkH",
    },
    {
      titulo: "Alicia en el País de las Maravillas",
      director: "Tim Burton",
      año: 2010,
      imdb: 6.4,
      descripcion:
        "Alicia regresa al mágico País de las Maravillas, donde se reencuentra con viejos amigos y enfrenta nuevos desafíos para salvar el reino.",
      imagen: "./src/img/alicia.jpg",
      trailerId: "Gyu7zvy8leg?si=9z3sIhpevnvisTmV",
    },
  ],
  Accion: [
    {
      titulo: "Rocky IV: Rocky vs. Drago",
      director: "Sylvester Stallone",
      año: 1985,
      imdb: 6.9,
      descripcion:
        "Rocky Balboa se enfrenta al invencible boxeador soviético Ivan Drago en una pelea épica que trasciende el deporte.",
      imagen: "./src/img/rocky.jpg",
      trailerId: "4qjV0bB2V0Q?si=ev0bdOX3rS4w94s_",
    },
    {
      titulo: "Rápido y Furioso",
      director: "Rob Cohen",
      año: 2001,
      imdb: 6.8,
      descripcion:
        "Un policía encubierto se infiltra en una banda de corredores callejeros para desmantelar sus operaciones ilegales.",
      imagen: "./src/img/RYF.jpg",
      trailerId: "2TAOizOnNPo?si=rAg0T6AMJUqQVQ1j",
    },
    {
      titulo: "Interstellar",
      director: "Christopher Nolan",
      año: 2014,
      imdb: 8.7,
      descripcion:
        "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
      imagen: "./src/img/Interstellar.jpg",
      trailerId: "LYS2O1nl9iM?si=dIlHd4LsbCZb6jAL",
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

let topPeliculas = [];

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
  detalleInfo.textContent = `${peli.director} | ${peli.año} | Rating IMDB: ${peli.imdb}`;
  detalleDescripcion.textContent = peli.descripcion;
  detalleImagen.src = peli.imagen || "";

  // contenedor donde se muestra todo el detalle
  const contenedor = document.querySelector(".pelicula-seleccionada");

  contenedor.style.display = "flex";
  contenedor.scrollIntoView({ behavior: "smooth" });
  contenedor.classList.remove("mostrar");
  void contenedor.offsetWidth; // fuerza reflow
  contenedor.classList.add("mostrar");

  contenedor.scrollIntoView({ behavior: "smooth" });

  // botón de trailer
  const botonExistente = contenedor.querySelector(".btn-ver-trailer");
  if (botonExistente) botonExistente.remove(); // evitar duplicados

  const btnTrailer = document.createElement("button");
  btnTrailer.textContent = "Ver Trailer";
  btnTrailer.classList.add("btn-ver-trailer");
  btnTrailer.dataset.trailer = peli.trailerId;
  detalleImagen.insertAdjacentElement("afterend", btnTrailer);
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
  topPeliculas = obtenerTopPeliculas();
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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-trailer");
  const contenedorTrailer = document.getElementById("contenedor-trailer");
  const cerrarTrailer = document.getElementById("cerrar-trailer");

  document.body.addEventListener("click", (e) => {
    if (e.target.matches(".btn-ver-trailer")) {
      const trailerId = e.target.dataset.trailer;
      const trailerURL = `https://www.youtube.com/embed/${trailerId}`;

      contenedorTrailer.innerHTML = `
        <iframe width="100%" height="400"
          src="${trailerURL}"
          title="Trailer de película"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      `;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });

  cerrarTrailer.addEventListener("click", () => {
    modal.style.display = "none";
    contenedorTrailer.innerHTML = "";
    document.body.style.overflow = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      contenedorTrailer.innerHTML = "";
      document.body.style.overflow = "";
    }
  });
});