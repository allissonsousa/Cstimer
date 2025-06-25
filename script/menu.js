function surgeTempo(){
  const artigo = document.getElementById("anotacaomedia");
  artigo.classList.add("artigoaparece")
}

function fechaArtigo() {
  const artigomedia = document.getElementById("anotacaomedia");
  artigomedia.classList.remove("artigoaparece")
}

function abreFecha() {
  const submenu = document.getElementById("menuItem");
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";

}


