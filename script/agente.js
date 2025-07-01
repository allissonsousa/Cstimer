import (item);
import (media);

async function chamarAgenteIA(tempoAtual, media, melhor) {
  const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer SUA_API_KEY_AQUI"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Você é um treinador de cubo mágico que dá feedback técnico e motivacional com base nos tempos do usuário, se o usuario bater seu recorde, ecreva uma respostas de parabenização curta com emojis." },
        { role: "user", content: `O tempo mais recente foi ${item}s, a média atual é ${media}s, e o melhor tempo é ${recorde}s. Gere um comentário adequado para o log do site.` }
      ]
    })
  });

  const data = await resposta.json();
  const respostaIA = data.choices[0].message.content;
  document.getElementById("log").innerText = respostaIA;
  console.log(respostaIA);
}