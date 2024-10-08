// Función para abrir la carta y mostrar el papel
function abrirCarta() {
  console.log("Carta abierta");
  const cartaImagen = document.getElementById("imagen-carta");
  cartaImagen.src = "Assets/Carta abierta.png";
  document.getElementById("papel").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  cartaImagen.classList.add("abierta");
}

// Función para cerrar la carta

function cerrarPapel() {
  document.getElementById("papel").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  cartaImagen.classList.remove("abierta");
}

function redireccionarCancion() {
  // Lista de URLs de canciones de YouTube
  const canciones = [
    "https://www.youtube.com/watch?v=ubbE6gyBf8k", // la jumpa
    "https://www.youtube.com/watch?v=l5wj30L6hsE", // la bella y la bestia
    "https://www.youtube.com/watch?v=r8BwnWeqPbc", // a mi amor nunca le temas
    "https://www.youtube.com/watch?v=4Pw61Ng3K8o", // el camionero
    "https://www.youtube.com/watch?v=QmpTkkaKYSU", //Arson
    "https://www.youtube.com/watch?v=evJ6gX1lp2o",
    "https://www.youtube.com/watch?v=sAP3iFN4BI0",
    "https://www.youtube.com/watch?v=WB58k5bDFp8",
    "https://www.youtube.com/watch?v=1ooy2CyFLH4",
    "https://www.youtube.com/watch?v=UdGMRQg5szM",
    "https://www.youtube.com/watch?v=86SBmX2zWEI",
    "https://www.youtube.com/watch?v=vRBgZ4aMPio",
    "https://www.youtube.com/watch?v=Eloj-b6pRQI",
    "https://www.youtube.com/watch?v=aVQsELVbjtI",
    "https://www.youtube.com/watch?v=ucYrx7g_G-Y",
    "https://www.youtube.com/watch?v=-DlMoJ2V6uk",
    "https://www.youtube.com/watch?v=7mxTmc7qQK8",
    "https://www.youtube.com/watch?v=Fgmo8qmH-tw", 
    "https://www.youtube.com/watch?v=dkU04T-a56c",
    "https://www.youtube.com/watch?v=_yMN6hxyOTM"
  ];

  // Seleccionamos de la cancion aleatorio
  const indiceAleatorio = Math.floor(Math.random() * canciones.length);

  // Redireccionamos a la canción aleatoria
  window.open(canciones[indiceAleatorio], "_blank");
}
