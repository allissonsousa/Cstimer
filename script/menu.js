function surgeTempo() {
  const tempos = document.getElementById("anotacaotempo");
  tempos.style.display = "flex";
  someCorpo();
}

function surgeMedia() {
  const media = document.getElementById("anotacaomedia");
  media.style.display = "flex";
  someCorpo();
}

function surgeRecordes() {
  const recordes = document.getElementById("anotacaorecordes");
  recordes.style.display = "flex";
  someCorpo();
}


function someCorpo() {
  const corpo = document.getElementById("cronometro");
  const logo = document.getElementById("cubo");
  corpo.style.filter = corpo.style.filter === "blur(8px)" ? "blur(0px)" : "blur(8px)";
  logo.style.filter = logo.style.filter === "blur(8px)" ? "blur(0px)" : "blur(8px)";
}

function fechaArtigo() {
  const artigo = document.getElementsByClassName("artigo");
  artigo.style.display = "none";
  someCorpo();
}


function abreFecha() {
  const submenu = document.getElementById("menuItem");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";

}


