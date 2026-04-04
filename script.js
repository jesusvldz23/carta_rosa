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

  // 🔥 FOTO PRINCIPAL (la más importante)
  const fotoPrincipal = "./foto1.jpeg";

  const fotos = [
    "./foto2.jpeg","./foto3.jpeg","./foto4.jpeg","./foto5.jpeg",
    "./foto6.jpeg","./foto7.jpeg","./foto8.jpeg","./foto9.jpeg",
    "./foto10.jpeg","./foto11.jpeg","./foto12.jpeg","./foto13.jpeg",
    "./foto14.jpeg","./foto15.jpeg"
  ];

  // FOTO PRINCIPAL
  const principal = document.createElement("img");
  principal.src = fotoPrincipal;
  principal.classList.add("foto-principal");

  principal.style.left = "50%";
  principal.style.top = "50%";
  principal.style.transform = "translate(-50%, -50%)";

  collage.appendChild(principal);

  // POSICIONES DE LAS DEMÁS (tipo círculo alrededor)
  const posiciones = [];

  fotos.forEach((foto, index) => {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = foto;
      img.classList.add("foto-collage");

      let left, top, intento = 0;

      do {
        left = Math.random() * 85;
        top = Math.random() * 85;
        intento++;
      } while (
        // evitar centro (para no tapar la principal)
        (Math.abs(left - 50) < 20 && Math.abs(top - 50) < 20) ||

        // evitar encimarse mucho
        posiciones.some(pos =>
          Math.abs(pos.left - left) < 18 &&
          Math.abs(pos.top - top) < 18
        ) && intento < 50
      );

      posiciones.push({ left, top });

      img.style.left = left + "%";
      img.style.top = top + "%";

      img.style.transform =
        "translate(-50%, -50%) rotate(" + (Math.random() * 25 - 12) + "deg)";

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