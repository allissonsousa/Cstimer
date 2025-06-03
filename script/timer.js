import ('ordem') 
let cronometro = null;
    let tempoInicial = 0;
    let tempoDecorrido = 0;
    let Tabela = []
    let item = ''
    let soma = 0
    let decorre = 0
    let media = 0
    let strnumero = ''
    let mediaValores = 0
    let cont = 0

    function adicionarLinha(decorre){
      const tabela = document.getElementById('itensTempo')[0];
      const novaLinha = tabela.insertRow();
      const celulaTempo = novaLinha.insertCell();
      celulaTempo.textContent = decorre
    }

    function atualizarTempo() {
      const agora = Date.now();
      const tempoAtual = tempoDecorrido + (cronometro ? agora - tempoInicial : 0);

      const minutos = String(Math.floor(tempoAtual / 60000)).padStart(2, '0');
      const segundos = String(Math.floor((tempoAtual % 60000) / 1000)).padStart(2, '0');
      const milissegundos = String(Math.floor((tempoAtual % 1000) / 10)).padStart(2, '0'); // centésimos
      
      let tempoFinal = `${minutos}:${segundos}:${milissegundos}`;
      item = tempoFinal
      document.getElementById('tempo').textContent = tempoFinal;
      
      
    }

    function iniciar() {
        if (cronometro) return;
      tempoInicial = Date.now();
      cronometro = setInterval(atualizarTempo, 10);
    }

    function pausar() {
      if (!cronometro) return;
      clearInterval(cronometro);
      tempoDecorrido += Date.now() - tempoInicial;
      cronometro = null;
      decorre = tempoDecorrido
      Tabela.push(item);
      adicionarLinha();
    }
    

    function resetar() {
      pausar();
      atualizarTempo();
      strnumero = decorre.toString().slice(0,-1)
      mediaValores = parseInt(strnumero)
      cont += 1
      soma += mediaValores
      media = soma / cont
      tempoDecorrido = 0
      document.getElementById('tabela').textContent = Tabela
      document.getElementById('media').textContent = media
      ordem();
    }


    // Inicia a exibição com 00:00:00
    atualizarTempo();

    

 // 🧠 Mapeamento de teclas para funções
 const teclasFuncoes = {
    ' ': () => { // espaço
      if (cronometro) {
        pausar();
        resetar();
      } else {
        iniciar();
      }
    },

  };

  // 🎯 Ouvinte genérico de teclado
  document.addEventListener('keydown', function (event) {
    const tecla = event.key.toLowerCase();
    if (teclasFuncoes[tecla]) {
      event.preventDefault(); // evitar ações padrão (como rolagem)
      teclasFuncoes[tecla]();
    }
  });
