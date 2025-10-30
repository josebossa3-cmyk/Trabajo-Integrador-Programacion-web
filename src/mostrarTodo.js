// estas peliculas son las mismas que del index
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
  Romantica:[
    {
      titulo:"TiTanic",
      director:"James Cameron",
      año:1997,
      imdb:7.9,
      descripcion:"Un joven artista y una mujer de clase alta se enamoran a bordo del fatídico Titanic.",
      imagen:"./src/img/titanic.jpg",
    },
    {
      titulo: "el diario de una pasion",
      director: "Nick Cassavetes",
      año: 2004,
      imdb: 7.8,
      descripcion:"enamorarse, una joven pareja se separa debido a diferencias de clase.",
      imagen: "./src/img/el_diario.jpg",
    },
    {
    titulo:"10 cosas que odio de ti",
    director:"Gil Junger",
    año:1999,
    imdb:7.4,
    descripcion:"Al descubrir que la chica de sus sueños no puede salir con nadie hasta que se enamore su hermana mayor, un adolescente recluta al chico malo de la clase para conquistarla.",
    imagen:"./src/img/10_cosas.jpg",
    },
  ],
  Fantasia:[
    {
      titulo: "Harry Potter y el prisionero de Azkaban",
      director: "Alfonso Cuarón",
      año: 2004,
      imdb: 7.9,
      descripcion:"Harry Potter y el prisionero de Azkaban es la tercera entrega de la saga, donde Harry regresa a Hogwarts mientras un peligroso fugitivo, Sirius Black, escapa de Azkaban. A medida que se revelan secretos del pasado, Harry descubre verdades sobre sus padres, la traición que los rodeó y el vínculo que lo une a Sirius",
      imagen: "./src/img/harry_potter.jpg",
    },
    {
      titulo: "El Viaje de Chihiro",
      director: "Hayao Miyazaki",
      año: 2001,
      imdb: 8.6,
      descripcion:"Una niña de 10 años llamada Chihiro se adentra en un mundo misterioso gobernado por una bruja, donde quienes no obedecen son transformados en animales.",
      imagen:"./src/img/El_viaje_de_chihiro.jpg",
    },
    {
      titulo: "Alice en el País de las Maravillas",
      director: "Tim Burton",
      año: 2010,
      imdb: 6.4,
      descripcion:"Alice regresa al mágico País de las Maravillas, donde se reencuentra con viejos amigos y enfrenta nuevos desafíos para salvar el reino.",
      imagen:"./src/img/alicia.jpg",
    },
  ],
  Accion:[
  {
  titulo: "rocky IV",
  director: "Sylvester Stallone",
  año: 1985,
  imdb: 6.9,
  descripcion: "Rocky Balboa se enfrenta al invencible boxeador soviético Ivan Drago en una pelea épica que trasciende el deporte.",
  imagen: "./src/img/rocky.jpg",
  },
  {
    titulo:"rapido y furioso ",
    director:"Rob Cohen",
    año:2001,
    imdb:6.8,
    descripcion:"Un policía encubierto se infiltra en una banda de corredores callejeros para desmantelar sus operaciones ilegales.",
    imagen:"./src/img/RYF.JPG",
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


// aca hacemos las tarjetas y las agregamos al contenedor
const contenedor = document.querySelector(".grid-peliculas");

Object.entries(peliculas).forEach(([genero, lista]) => {
  lista.forEach((peli) => {
    const card = document.createElement("div");
    card.classList.add("card-pelicula");
    card.innerHTML = `
      <img src="${peli.imagen}" alt="${peli.titulo}">
      <h3>${peli.titulo}</h3>
      <p>${genero} | IMDB: ${peli.imdb}</p>
    `;

    // al hacer click, guardas datos y volver a index
    card.addEventListener("click", () => {
      localStorage.setItem(
        "peliculaSeleccionada",
        JSON.stringify({ ...peli, genero })
      );
      window.location.href = "index.html#peliculaSeleccionada";
    });

    contenedor.appendChild(card);
  });
});
