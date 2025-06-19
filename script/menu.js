function surgeTempo() {
  const corpo = document.getElementById("cronometro");
  const logo = document.getElementById("cubo");
  const tempos = document.getElementById("anotacaotempo");
  tempos.style.display = "flex";
  corpo.style.filter = 'blur(8px)';
  logo.style.filter = 'blur(8px)';
}

function fechaArtigo() {
  const corpo = document.getElementById("cronometro");
  const logo = document.getElementById("cubo");
  const artigo = document.getElementById("anotacaotempo");
  artigo.style.display = "none";
  corpo.style.filter = 'blur(0px)';
  logo.style.filter = 'blur(0px)';
}


function abreFecha() {
  const submenu = document.getElementById("menuItem");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";

}


