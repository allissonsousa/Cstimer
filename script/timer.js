    let segundos = 0;
    let cronometro = null;
    let registro = []
    const TEMPO_LIMITE = 10; // ⏱️ limite em segundos (altere para 60, 90, etc.)

    function atualizarTempo() {
      const min = String(Math.floor(segundos / 60)).padStart(2, '0');
      const sec = String(segundos % 60).padStart(2, '0');
      document.getElementById("tempo").textContent = `${min}:${sec}`;
      registro.push(`${min}:${sec}`)
    }

    function iniciar() {
      cronometro = setInterval(() => {
        segundos++;
        atualizarTempo();
        if (segundos >= TEMPO_LIMITE) {
          pararEComecarReset();
        }
      }, 1000);
    }

    function pararEComecarReset() {
      clearInterval(cronometro);
      cronometro = null;

      setTimeout(() => {
        segundos = 0;
        atualizarTempo();
      }, 2000); // mostra o tempo final por 2 segundos antes de resetar
    }

    function pausar() {
      clearInterval(cronometro);
      cronometro = null;
    }

    document.addEventListener('keydown', function(event) {
      if (event.code === 'Space') {
        event.preventDefault(); // evita rolagem
        if (cronometro === null) {
          iniciar();
        } else {
          pausar();
          console.log('Seu tempo foi', registro)
        }
      }
    })

    
