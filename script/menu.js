function surgeTempo() {
  const artigo = document.getElementById("anotacaomedia");
  const tempo = document.getElementById("cronometro");
  if (artigo.classList.contains("artigosome")) {
    artigo.classList.add("artigoaparece");
    artigo.classList.remove("artigosome");
    tempo.style.display = "none";
  }
}

function fechaArtigo() {
  const artigomedia = document.getElementById("anotacaomedia");
  artigomedia.classList.add("artigosome");
  artigomedia.classList.remove("artigoaparece");

  function artigo() {
    const tempo = document.getElementById("cronometro");
    tempo.style.display = "flex";
  }

  setTimeout(artigo, 300);
}

function abreFecha() {
  const submenu = document.getElementById("menuItens");
  if (submenu.classList.contains("menusome")) {
    submenu.classList.add("menuaparece");
    submenu.classList.remove("menusome");
  } else {
    submenu.classList.add("menusome");
    submenu.classList.remove("menuaparece");
  }
}
