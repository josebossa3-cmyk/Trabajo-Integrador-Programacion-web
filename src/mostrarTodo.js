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
