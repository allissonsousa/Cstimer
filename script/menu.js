function surgeTempo(){
  const artigo = document.getElementById("anotacaomedia");
  if (artigo.style.display == "none"){
    artigo.classList.add("artigoaparece");
    artigo.style.display = "flex";
  } else {
    artigo.classList.add("artigosome");
    artigo.style.display = "none";
  }
}


function fechaArtigo() {
  const artigomedia = document.getElementById("anotacaomedia");
  artigomedia.classList.remove("artigoaparece")
}


function abreFecha() {
  const submenu = document.getElementById("menuItem");
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
  console.log('tudo certo');
  

}


