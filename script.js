// Texto animado
const texto = "Rosa, eres la mejor novia del mundo ❤️";
let i = 0;

function escribirTexto() {
  if (i < texto.length) {
    document.getElementById("mensaje").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribirTexto, 50);
  }
}

// Música
let musicaIniciada = false;

function iniciarMusica() {
  const musica = document.getElementById("musica");
  if (!musicaIniciada) {
    musica.play();
    musicaIniciada = true;
  }
}

// Collage con 10 fotos
function mostrarCollage() {
  const collage = document.getElementById("collage");

  const fotos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg",
    "foto9.jpg",
    "foto10.jpg"
  ];

  fotos.forEach((foto, index) => {
    const img = document.createElement("img");
    img.src = foto;
    img.classList.add("foto-collage");

    img.style.left = Math.random() * 80 + "%";
    img.style.top = Math.random() * 80 + "%";
    img.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

    img.style.animationDelay = (index * 0.2) + "s";

    collage.appendChild(img);
  });
}

// Abrir carta
function abrirCarta() {
  document.getElementById("sorpresa").style.display = "block";
  mostrarCollage();
  iniciarMusica();
}

// Iniciar animación
window.onload = () => {
  document.getElementById("mensaje").innerHTML = "";
  escribirTexto();
};