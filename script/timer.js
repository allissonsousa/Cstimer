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
//isso aqui ta uma gambiarra do krtenho q arrumar ta feio

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

//Função responsavel por omitir a ordem de embaralhamento da tela

function someApareceCodigo() {
  let codigo = document.getElementById("random");
  if (codigo != null) {
    codigo.textContent = "";
  }
}


//Função que inicia o cronometro e omite o codigo na tela

function iniciar() {
  if (cronometro) return;
  tempoInicial = Date.now();
  cronometro = setInterval(atualizarTempo, 10);
  someApareceCodigo();
}

//Função responsavel por pausar o tempo, e chamar a funçao q adiciona divs ao campo que contem os tempos do usuário

function pausar() {
  if (!cronometro) return;
  clearInterval(cronometro);
  tempoDecorrido += Date.now() - tempoInicial;
  cronometro = null;
  decorre = tempoDecorrido;
  adicionarDiv();
}

//Função que limpa o tempo exibido na tela e incrementa o valor do tempo ao calculo da media dos tempos

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


// Função que armazena todos os tempos criando divs

function adicionarDiv() {
  var pai = document.getElementById("tempos");
  var filho = document.createElement("div");
  filho.textContent = `${item} s`;
  filho.classList.add("dados");
  pai.appendChild(filho);
}

//Criação da função para substituir o recorde antigo pelo novo
//Função que verifica qual é o novo recorde e qual é o antigo recorde
let atual = [];
let antigo = [];
let stratual = [];
let strantigo = [];
let contar = null;

function adicionarRecordes() {
  const record = document.getElementById("recordeatual");
  const lastrec = document.getElementById("recordeantigo");
  const numerado = parseInt(itemnumerado);

  if (contar == null) {
    atual.push(numerado);
    stratual.push(item);
    record.textContent = item;
    contar = 1;
    primeirorecorde();
  } else {
    if (atual[0] > numerado) {
      antigo.length = 0
      antigo.push(atual[0]);
      atual.length = 0;
      atual.push(numerado);

      strantigo.length = 0
      strantigo.push(stratual[0]);
      stratual.length = 0;
      stratual.push(item);
      record.textContent = stratual;
      lastrec.textContent = strantigo;

      quebrarecorde();
    }
  }


}

//adicção de um emitidor de mensagens que sera chamado pela função que monitora a mudança nos recordes

function primeirorecorde() {
  alert("parabens por iniciar seu treino, continue com essa determinação");
}

function quebrarecorde() {
  const mensagens = ["Parabéns, voce bateu seu recorde antigo, continue assim 😉🤙 ",
    "Você atingiu um novo recorde, parabéns velocista 😁🤝",
    "Parece que as coisas estão ficando quentes por aqui 🥵, parabéns pelo seu novo recorde!😉",
    "Isso que eu chamo de mãos magicas, você atingiu um novo melhor tempo 🤌",
    "Seu esforço está sendo compensado, você atingiu um novo marco e diminuiu seu recorde!!😎 "]
  indice = Math.floor(Math.random() * 5);
  alert(mensagens[indice]);
}

function monitoramedias() {
  if (desempenho == melhorando) {
    alert("Sua média tem melhorando constantemente !! Continue assim 😁🤝 ")
  } else if (desempenho == piorando) {
    alert("Sua média está caindo, talvez seja melhor você dar uma olhadas nas dicas de permutação no menu de acesso 🖋️📖 ")
  }
}