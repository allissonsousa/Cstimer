let cont = 0
listaFinal = []
while (cont < 14){
    const lista1 = [" R "," L ", "F "," D "," B "," U "]
    const lista2 = ["","´ ","2 "]
    let item1 = lista1[Math.floor(Math.random() * lista1.length)]
    let item2 = lista2[Math.floor(Math.random() * lista2.length)]
    let itemFinal = item1 + item2
    if (listaFinal == false){
        listaFinal.push(itemFinal)
    } else if (listaFinal[-1] != itemFinal){   
        listaFinal.push(itemFinal)
        cont +=1
    }
}

document.getElementById("random").textContent = listaFinal
