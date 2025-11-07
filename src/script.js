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
    }
  ],
  Romantica: [
    {
      titulo: "TiTanic",
      director: "James Cameron",
      año: 1997,
      imdb: 7.9,
      descripcion: "Un joven artista y una mujer de clase alta se enamoran a bordo del fatídico Titanic.",
      imagen: "./src/img/titanic.jpg",
    },
    {
      titulo: "el diario de una pasion",
      director: "Nick Cassavetes",
      año: 2004,
      imdb: 7.8,
      descripcion: "enamorarse, una joven pareja se separa debido a diferencias de clase.",
      imagen: "./src/img/el_diario.jpg",
    },
    {
      titulo: "10 cosas que odio de ti",
      director: "Gil Junger",
      año: 1999,
      imdb: 7.4,
      descripcion: "Al descubrir que la chica de sus sueños no puede salir con nadie hasta que se enamore su hermana mayor, un adolescente recluta al chico malo de la clase para conquistarla.",
      imagen: "./src/img/10_cosas.jpg",
    },
  ],
  Fantasia: [
    {
      titulo: "Harry Potter y el prisionero de Azkaban",
      director: "Alfonso Cuarón",
      año: 2004,
      imdb: 7.9,
      descripcion: "Harry Potter y el prisionero de Azkaban es la tercera entrega de la saga, donde Harry regresa a Hogwarts mientras un peligroso fugitivo, Sirius Black, escapa de Azkaban. A medida que se revelan secretos del pasado, Harry descubre verdades sobre sus padres, la traición que los rodeó y el vínculo que lo une a Sirius",
      imagen: "./src/img/harry_potter.jpg",
    },
    {
      titulo: "El Viaje de Chihiro",
      director: "Hayao Miyazaki",
      año: 2001,
      imdb: 8.6,
      descripcion: "Una niña de 10 años llamada Chihiro se adentra en un mundo misterioso gobernado por una bruja, donde quienes no obedecen son transformados en animales.",
      imagen: "./src/img/El_viaje_de_Chihiro.jpg",
    },
    {
      titulo: "Alice en el País de las Maravillas",
      director: "Tim Burton",
      año: 2010,
      imdb: 6.4,
      descripcion: "Alice regresa al mágico País de las Maravillas, donde se reencuentra con viejos amigos y enfrenta nuevos desafíos para salvar el reino.",
      imagen: "./src/img/alicia.jpg",
    },
  ],
  Accion: [
    {
      titulo: "rocky IV",
      director: "Sylvester Stallone",
      año: 1985,
      imdb: 6.9,
      descripcion: "Rocky Balboa se enfrenta al invencible boxeador soviético Ivan Drago en una pelea épica que trasciende el deporte.",
      imagen: "./src/img/rocky.jpg",
    },
    {
      titulo: "rapido y furioso ",
      director: "Rob Cohen",
      año: 2001,
      imdb: 6.8,
      descripcion: "Un policía encubierto se infiltra en una banda de corredores callejeros para desmantelar sus operaciones ilegales.",
      imagen: "./src/img/RYF.jpg",
    },
    {
      titulo: "interestellar",
      director: "Christopher Nolan",
      año: 2014,
      imdb: 8.7,
      descripcion: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
      imagen: "./src/img/Interstella.jpg",
    }
  ]
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
  detalleInfo.textContent = `${peli.director} | ${peli.año} | Rating IMDB: ${peli.imdb || peli.rating || "—"
    }`;
  detalleDescripcion.textContent = peli.descripcion;
  detalleImagen.src = peli.imagen || "";
  const contenedor = document.querySelector(".pelicula-seleccionada");
  contenedor.style.display = "flex";
  contenedor.scrollIntoView({ behavior: "smooth" });

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

// validacion del formulario 
document.addEventListener('DOMContentLoaded', function () {
    const formContacto = document.getElementById('form-contacto');
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const inputTelefono = document.getElementById('telefono');
    const selectMotivo = document.getElementById('motivo');
    const textareaMensaje = document.getElementById('mensaje');

    const linkContacto = document.getElementById('link-contacto');
    const modal = document.getElementById('modal-contacto');
    const cerrar = document.querySelector('.cerrar');

    const MAX_LENGTH_NOMBRE = 20;
    const MAX_LENGTH_EMAIL = 100;
    const MAX_LENGTH_MENSAJE = 500;
    const MIN_LENGTH_MENSAJE = 10;

    function mostrarError(elementId, mensaje) {
        const errorElement = document.getElementById(`error-${elementId}`);
        if (errorElement) {
            errorElement.textContent = mensaje;
            errorElement.style.color = 'red';
        }
    }

    function limpiarError(elementId) {
        const errorElement = document.getElementById(`error-${elementId}`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }

    function validarTelefono(telefono) {
        const re = /^[0-9\s\-()+]{7,15}$/;
        return re.test(telefono);
    }

    function mostrarDatosEnviados(datos) {
        const contenedor = document.querySelector('.modal-content');
        const resultado = document.createElement('div');
        resultado.classList.add('resultado-envio');
        

        const titulo = document.createElement('h3');
        titulo.textContent = 'Datos enviados:';
        resultado.appendChild(titulo);

        for (const clave in datos) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${clave}:</strong> ${datos[clave]}`;
            resultado.appendChild(p);
        }

        contenedor.appendChild(resultado);
    }

    // Validación del formulario
    function validarFormulario(event) {
        event.preventDefault();
        let esValido = true;

        limpiarError('nombre');
        limpiarError('email');
        limpiarError('telefono');
        limpiarError('motivo');
        limpiarError('mensaje');

        const nombre = inputNombre.value.trim();
        const email = inputEmail.value.trim();
        const telefono = inputTelefono.value.trim();
        const motivo = selectMotivo.value;
        const mensaje = textareaMensaje.value.trim();

        if (nombre.trim === '') {
            mostrarError('nombre', 'El nombre es obligatorio.');
            esValido = false;
        } else if (nombre.length <= 10 || nombre.length >= 20) {
            mostrarError('nombre', 'el nombre tiene que tener ente 10 y 20 caracteres');
            esValido = false;
        }

        if (email === '') {
            mostrarError('email', 'El email es obligatorio.');
            esValido = false;
        } else if (!validarEmail(email)) {
            mostrarError('email', 'Formato de email inválido.');
            esValido = false;
        }

        if (telefono === '') {
            mostrarError('telefono', 'El teléfono es obligatorio.');
            esValido = false;
        } else if (!validarTelefono(telefono)) {
            mostrarError('telefono', 'Formato de teléfono inválido.');
            esValido = false;
        }

        if (motivo === '') {
            mostrarError('motivo', 'Debes seleccionar un motivo.');
            esValido = false;
        }

        if (mensaje === '') {
            mostrarError('mensaje', 'El mensaje no puede estar vacío.');
            esValido = false;
        } else if (mensaje.length < MIN_LENGTH_MENSAJE) {
            mostrarError('mensaje', `Debe tener al menos ${MIN_LENGTH_MENSAJE} caracteres.`);
            esValido = false;
        }

        if (esValido) {
            const datos = {
                Nombre: nombre,
                Email: email,
                Teléfono: telefono,
                Motivo: motivo,
                Mensaje: mensaje
            };
            mostrarDatosEnviados(datos);
            formContacto.reset();
        }
    }
    if (formContacto) {
        formContacto.addEventListener('submit', validarFormulario);
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});