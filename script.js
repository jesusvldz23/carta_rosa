const texto = "Eres la mejor novia del mundo ❤️";
let i = 0;

function escribirTexto() {
  if (i < texto.length) {
    document.getElementById("mensaje").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribirTexto, 50);
  }
}

let musicaIniciada = false;

function iniciarMusica() {
  const musica = document.getElementById("musica");
  if (!musicaIniciada) {
    musica.play();
    musicaIniciada = true;
  }
}

// Collage bien distribuido
function mostrarCollage() {
  const collage = document.getElementById("collage");

  const fotoPrincipal = "./foto1.jpeg";

  const fotos = [
    "./foto2.jpeg","./foto3.jpeg","./foto4.jpeg","./foto5.jpeg",
    "./foto6.jpeg","./foto7.jpeg","./foto8.jpeg","./foto9.jpeg",
    "./foto10.jpeg","./foto11.jpeg","./foto12.jpeg","./foto13.jpeg",
    "./foto14.jpeg","./foto15.jpeg"
  ];

  function generarCollage() {
    collage.innerHTML = ""; // limpiar todo

    //FOTO PRINCIPAL
    const principal = document.createElement("img");
    principal.src = fotoPrincipal;
    principal.classList.add("foto-principal");

    principal.style.left = "50%";
    principal.style.top = "50%";
    principal.style.transform = "translate(-50%, -50%)";

    collage.appendChild(principal);

    const posiciones = [];

    fotos.forEach((foto, index) => {
      setTimeout(() => {
        const img = document.createElement("img");
        img.src = foto;
        img.classList.add("foto-collage");

        let left, top, intento = 0;

        do {
          left = Math.random() * 90;
          top = Math.random() * 90;
          intento++;
        } while (
          // evitar centro
          (Math.abs(left - 50) < 22 && Math.abs(top - 50) < 22) ||

          // evitar encimarse mucho
          posiciones.some(pos =>
            Math.abs(pos.left - left) < 18 &&
            Math.abs(pos.top - top) < 18
          ) && intento < 60
        );

        posiciones.push({ left, top });

        img.style.left = left + "%";
        img.style.top = top + "%";

        img.style.transform =
          "translate(-50%, -50%) rotate(" + (Math.random() * 20 - 10) + "deg)";

        collage.appendChild(img);
      }, index * 200);
    });
  }

  // 🔁 Primera ejecución
  generarCollage();

  // 🔄 Repetir cada 8 segundos
  setInterval(() => {
    generarCollage();
  }, 8000);
}
// Corazones
function crearCorazones() {
  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.innerHTML = "❤️";
    corazon.classList.add("corazon");

    corazon.style.left = Math.random() * 100 + "%";
    corazon.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 6000);
  }, 300);
}

function abrirCarta() {
  document.getElementById("card").classList.add("oculta");

  iniciarMusica();
  mostrarCollage();
  crearCorazones();

  setTimeout(() => {
    document.getElementById("finalText").classList.add("mostrar");
  }, 4000);
}
function crearEstrellas() {
  for (let i = 0; i < 60; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");

    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.top = Math.random() * 100 + "%";

    estrella.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(estrella);
  }
}
function actualizarContador() {
  const inicio = new Date("2023-02-02"); 

  const ahora = new Date();
  const diferencia = ahora - inicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  document.getElementById("contador").innerHTML =
    "Llevamos " + dias + " días juntos ";
}
 
window.onload = () => {
  document.getElementById("mensaje").innerHTML = "";
  escribirTexto();
  crearEstrellas();
  actualizarContador();
};

