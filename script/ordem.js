//Esse código entrega uma sequencia aleatoria de 12 simbolos, podendo conter o número 2 ou uma aspas simples 
//significando q o movimento deve ser antiorario. Nem uma letra deve repetir em sequencia


function ordem() {
    let cont = 0
    listaFinal = []
    ultimaLetra = ''
    while (cont < 12) {
        const lista1 = [" R ", " L ", " F ", " D ", " B ", " U "]    //lista de letras
        const lista2 = ["", "´ ", "2 "]                              //lista de possiveis pares para a letra
        let item1 = lista1[Math.floor(Math.random() * lista1.length)]
        let item2 = lista2[Math.floor(Math.random() * lista2.length)]       //seleciona uma letra e um simbolo
        let itemFinal = item1 + item2
        if (listaFinal.length == 0) {
            listaFinal.push(itemFinal)
            ultimaLetra = item1
            cont += 1
        } else if (ultimaLetra != itemFinal && ultimaLetra != item1) {
            listaFinal.push(itemFinal)
            cont += 1
        }
        ultimaLetra = item1
    }

    document.getElementById("random").textContent = listaFinal
}

