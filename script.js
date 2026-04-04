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
    "./foto1.jpeg","./foto2.jpeg","./foto3.jpeg","./foto4.jpeg","./foto5.jpeg",
    "./foto6.jpeg","./foto7.jpeg","./foto8.jpeg","./foto9.jpeg","./foto10.jpeg"
  ];

  const posiciones = [];

  fotos.forEach((foto, index) => {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = foto;
      img.classList.add("foto-collage");

      let left, top, intento = 0;

      // Evitar que se encimen mucho
      do {
        left = Math.random() * 80;
        top = Math.random() * 80;
        intento++;
      } while (
        posiciones.some(pos =>
          Math.abs(pos.left - left) < 20 &&
          Math.abs(pos.top - top) < 20
        ) && intento < 50
      );

      posiciones.push({ left, top });

      img.style.left = left + "%";
      img.style.top = top + "%";

      img.style.transform =
        "translate(-50%, -50%) rotate(" + (Math.random() * 25 - 12) + "deg)";

      collage.appendChild(img);
    }, index * 250);
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