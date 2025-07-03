import("ordem");
let cronometro = null;
let tempoInicial = 0;
let tempoDecorrido = 0;
let Tabela = [];
let item = "";
let soma = 0;
let decorre = 0;
let media = 0;
let strnumero = "";
let cont = 0;
//isso aqui ta uma gambiarra do krai tenho q arrumar ta feio

function atualizarTempo() {
  //funçao do cronometro que conta o tempo e atualiza os digitos do relogio na tela
  const agora = Date.now();
  const tempoAtual = tempoDecorrido + (cronometro ? agora - tempoInicial : 0);

  const minutos = String(Math.floor(tempoAtual / 60000)).padStart(2, "0");
  const segundos = String(Math.floor((tempoAtual % 60000) / 1000)).padStart(
    2,
    "0"
  );
  const milissegundos = String(Math.floor((tempoAtual % 1000) / 10)).padStart(
    2,
    "0"
  ); // centésimos

  if (minutos == "00" && segundos == "00" && milissegundos == "00") {
    tempoFinal = "";
  } else if (minutos == "00" && segundos == "00") {
    tempoFinal = `${milissegundos}`;
  } else if (minutos == "00") {
    tempoFinal = `${segundos}:${milissegundos}`;
  } else {
    tempoFinal = `${minutos}:${segundos}:${milissegundos}`; //gambiarra pra mostrar só as casas de unidades que contem valor
  }

  itemnumerado = `${minutos}${segundos}${milissegundos}`;
  item = tempoFinal;
  document.getElementById("tempo").textContent = tempoFinal;
}

function someApareceCodigo() {
  let codigo = document.getElementById("random");
  if (codigo != null) {
    codigo.textContent = "";
  }
}

//Função que verifica qual é o novo recorde e qual é o antigo recorde


function iniciar() {
  if (cronometro) return;
  tempoInicial = Date.now();
  cronometro = setInterval(atualizarTempo, 10);
  someApareceCodigo();
}

function pausar() {
  if (!cronometro) return;
  clearInterval(cronometro);
  tempoDecorrido += Date.now() - tempoInicial;
  cronometro = null;
  decorre = tempoDecorrido;
  adicionarDiv();
}

function resetar() {
  pausar();
  atualizarTempo();
  strnumero = decorre.toString().slice(0, -1);
  mediaValores = parseInt(strnumero);
  cont += 1;
  soma += mediaValores;
  media = soma / cont;
  tempoDecorrido = 0;
  document.getElementById("media").textContent = media;
  ordem();
  adicionarRecordes();
}

// Inicia a exibição com 00:00:00
atualizarTempo();

// 🧠 Mapeamento de teclas para funções
const teclasFuncoes = {
  " ": () => {
    // espaço
    if (cronometro) {
      pausar();
      resetar();
    } else {
      iniciar();
    }
  },
};

// 🎯 Ouvinte genérico de teclado
document.addEventListener("keyup", function (event) {
  const tecla = event.key.toLowerCase();
  if (teclasFuncoes[tecla]) {
    event.preventDefault(); // evitar ações padrão (como rolagem)
    teclasFuncoes[tecla]();
  }
});

///Fazendo a parte do controle do timer no celular

function tocar() {
  if (cronometro) {
    pausar();
    resetar();
  } else {
    iniciar();
  }
}


function adicionarDiv(){
  var pai = document.getElementById("tempos");
  var filho = document.createElement("div");
  filho.textContent = (`${item} s`);
  filho.classList.add("dados")
  pai.appendChild(filho);
}


function adicionarRecordes(){
  const record = document.getElementById("recordeatual");
  const lastrec = document.getElementById("recordeantigo");
  const numerado = parseInt(itemnumerado);
  let atual = 0;
  let antigo = 0;
  let contar = 0;
  if (contar == 0){
    record.textContent = item;
    atual = numerado;
    contar += 1; 
  } else if (cont != 0 || atual> numerado){
    atual = numerado;
    antigo = atual;
    record.textContent = item;
    lastrec.textContent = antigo;
  }
}