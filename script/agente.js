OPENAI_API_KEY= 

async function chamarAgenteIA(tempoAtual, media, melhor) {
  try {
    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer SUA_API_KEY_AQUI" // Substitua por sua chave de API real (no backend)
      },
      body: JSON.stringify({
        model: "gpt-4", // ou "gpt-3.5-turbo" se preferir uma versão mais leve
        messages: [
          {
            role: "system",
            content: "Você é um treinador de cubo mágico que dá feedback técnico e motivacional com base nos tempos do usuário."
          },
          {
            role: "user",
            content: `O tempo mais recente foi ${tempoAtual}s, a média atual é ${media}s, e o melhor tempo é ${melhor}s. Gere um comentário adequado para o log do site.`
          }
        ]
      })
    });

    if (!resposta.ok) {
      throw new Error(`Erro da API: ${resposta.status} - ${resposta.statusText}`);
    }

    const data = await resposta.json();
    const respostaIA = data.choices?.[0]?.message?.content || "Não foi possível gerar uma resposta da IA.";

    document.getElementById("log").innerText = respostaIA;
    console.log(respostaIA);

  } catch (erro) {
    console.error("Erro ao chamar a IA:", erro);
    document.getElementById("log").innerText = "Erro ao obter resposta da IA.";
  }
}
