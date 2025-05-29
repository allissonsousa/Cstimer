function ordem(){let cont = 0
listaFinal = []
ultimaLetra = ''
while (cont < 14){
    const lista1 = [" R "," L ", " F "," D "," B "," U "]
    const lista2 = ["","´ ","2 "]
    let item1 = lista1[Math.floor(Math.random() * lista1.length)]
    let item2 = lista2[Math.floor(Math.random() * lista2.length)]
    let itemFinal = item1 + item2
    if (listaFinal.length == 0){
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

