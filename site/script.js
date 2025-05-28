let cont = 0
listaFinal = []
ultimaLetra = []
while (cont < 14){
    const lista1 = [" R "," L ", " F "," D "," B "," U "]
    const lista2 = ["","´ ","2 "]
    let item1 = lista1[Math.floor(Math.random() * lista1.length)]
    let item2 = lista2[Math.floor(Math.random() * lista2.length)]
    let itemFinal = item1 + item2
    cont += 1
    if (listaFinal.length == 0){
        listaFinal.push(itemFinal)
        ultimaLetra = listaFinal[listaFinal.length - 1]
    } else if (ultimaLetra.charAt(0) != itemFinal[0]) {
        listaFinal.push(itemFinal)
    } 
    ultimaLetra = listaFinal[listaFinal.length - 1]
}

document.getElementById("random").textContent = listaFinal
