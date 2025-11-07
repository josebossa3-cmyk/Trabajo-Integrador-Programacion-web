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


// aca hacemos las tarjetas y las agregamos al contenedor
const contenedor = document.querySelector(".grid-peliculas");
const detalle = document.getElementById("detalle-pelicula");

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
      detalle.innerHTML = `
    <div class="detalle-contenedor">
      <div class="detalle-info">
        <h2 class="detalle-titulo">${peli.titulo}</h2>
        <img src="${peli.imagen}" alt="${peli.titulo}">
        <p><strong>Director:</strong> ${peli.director}</p>
        <p><strong>Año:</strong> ${peli.año}</p>
        <p><strong>IMDB:</strong> ${peli.imdb}</p>
        <p><strong>Descripción:</strong> ${peli.descripcion}</p>
      </div>

      <div class="detalle-trailer">
        <iframe 
          width="500" 
          height="500"
          src="https://www.youtube.com/embed/${peli.trailerId}" 
          title="Trailer de ${peli.titulo}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;
      detalle.scrollIntoView({ behavior: "smooth" });
    });
  contenedor.appendChild(card);
  });
  });
