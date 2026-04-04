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

function mostrarCollage() {
  const collage = document.getElementById("collage");

  const fotos = [
    "foto1.jpeg",
    "foto2.jpeg",
    "foto3.jpeg",
    "foto4.jpeg",
    "foto5.jpeg",
    "foto6.jpeg",
    "foto7.jpeg",
    "foto8.jpeg",
    "foto9.jpeg",
    "foto10.jpeg"
  ];

  fotos.forEach((foto, index) => {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = foto;
      img.classList.add("foto-collage");

      img.style.left = Math.random() * 80 + "%";
      img.style.top = Math.random() * 80 + "%";
      img.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

      collage.appendChild(img);
    }, index * 300);
  });
}

function abrirCarta() {
  document.getElementById("card").classList.add("oculta");

  iniciarMusica();
  mostrarCollage();

  setTimeout(() => {
    document.getElementById("finalText").classList.add("mostrar");
  }, 4000);
}

window.onload = () => {
  document.getElementById("mensaje").innerHTML = "";
  escribirTexto();
};