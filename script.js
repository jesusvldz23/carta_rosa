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

  const fotos = [
    "foto1.jpeg","foto2.jpeg","foto3.jpeg","foto4.jpeg","foto5.jpeg",
    "foto6.jpeg","foto7.jpeg","foto8.jpeg","foto9.jpeg","foto10.jpeg"
  ];

  const columnas = 4;
  const filas = 3;

  const anchoCelda = 100 / columnas;
  const altoCelda = 100 / filas;

  let index = 0;

  for (let fila = 0; fila < filas; fila++) {
    for (let col = 0; col < columnas; col++) {

      if (index >= fotos.length) return;

      setTimeout(() => {
        const img = document.createElement("img");
        img.src = fotos[index];
        img.classList.add("foto-collage");

        // Posición centrada
        let left = col * anchoCelda + anchoCelda / 2;
        let top = fila * altoCelda + altoCelda / 2;

        // Pequeña variación para look natural
        left += (Math.random() * 6 - 3);
        top += (Math.random() * 6 - 3);

        img.style.left = left + "%";
        img.style.top = top + "%";

        // Centrar imagen en ese punto
        img.style.transform =
          "translate(-50%, -50%) rotate(" + (Math.random() * 20 - 10) + "deg)";

        collage.appendChild(img);
      }, index * 250);

      index++;
    }
  }
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

window.onload = () => {
  document.getElementById("mensaje").innerHTML = "";
  escribirTexto();
};