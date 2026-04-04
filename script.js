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
  const anchoColumna = 100 / columnas;

  // alturas acumuladas por columna
  let alturas = [0, 0, 0, 0];

  fotos.forEach((foto, index) => {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = foto;
      img.classList.add("foto-collage");

      // elegir columna más baja
      let col = alturas.indexOf(Math.min(...alturas));

      // tamaños variados
      const tamaños = [140, 160, 180, 200];
      let size = tamaños[Math.floor(Math.random() * tamaños.length)];

      // calcular posición
      let left = col * anchoColumna + anchoColumna / 2;
      let top = alturas[col] + size / 2;

      // guardar nueva altura
      alturas[col] += size + 10;

      img.style.width = size + "px";
      img.style.height = size + "px";

      img.style.left = left + "%";
      img.style.top = top + "px";

      img.style.transform =
        "translate(-50%, -50%) rotate(" + (Math.random() * 20 - 10) + "deg)";

      collage.appendChild(img);
    }, index * 200);
  });
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