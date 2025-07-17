function surgeMedia() {

  function media() {
    const artigo = document.getElementById("anotacaomedia");
    const tempo = document.getElementById("cronometro");
    if (artigo.classList.contains("artigosome")) {
      artigo.classList.add("artigoaparece");
      artigo.classList.remove("artigosome");
      function some() {
        tempo.style.display = "none";
      }
      setTimeout(some, 300);
    }
  }

  fechaArtigo();
  abreFecha();
  setTimeout(media, 200);
}

function surgeTempos() {
  function tempos() {
    const artigo = document.getElementById("anotacaotempo");
    const tempo = document.getElementById("cronometro");
    if (artigo.classList.contains("artigosome")) {
      artigo.style.display = "flex";
      artigo.classList.add("artigoaparece");
      artigo.classList.remove("artigosome");
      function some() {
        tempo.style.display = "none";
      }
      setTimeout(some, 300);
    }
  }

  fechaArtigo();
  abreFecha();
  setTimeout(tempos, 200);
}

function surgeRecordes() {
  function record() {
    const artigo = document.getElementById("anotacaorecordes");
    const tempo = document.getElementById("cronometro");
    if (artigo.classList.contains("artigosome")) {
      artigo.style.display = "flex";
      artigo.classList.add("artigoaparece");
      artigo.classList.remove("artigosome");
      function some() {
        tempo.style.display = "none";
      }
      setTimeout(some, 300);
    }
  }
  fechaArtigo();
  abreFecha();
  setTimeout(record, 200);
}


function fechaArtigo() {
  const artigomedia = document.getElementsByClassName("artigoaparece");
  for (let i = 0; i < artigomedia.length; i++) {
    artigomedia[i].classList.add("artigosome");
    artigomedia[i].classList.remove("artigoaparece");
  }

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

