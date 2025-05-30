function medial(){
    let Tabela = []
    let item = ''
    let soma = 0
    let decorre = 0
    let media = 0
    let strnumero = ''
    let mediaValores = 0
    let cont = 0
    item = tempoFinal
    decorre = tempoDecorrido
    Tabela.push(item);
    strnumero = decorre.toString().slice(0,-1)
    mediaValores = parseInt(strnumero)
    cont += 1
    soma += mediaValores
    media = soma / cont
    tempoDecorrido = 0
    document.getElementById('tabela').textContent = Tabela
    document.getElementById('media').textContent = media
    contador += 1
    total += tempoDecorrido
    media = total/contador
    document.getElementById('media').textContent = media
}
