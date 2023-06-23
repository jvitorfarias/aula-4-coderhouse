let pesoCorporal = Number(prompt("Qual seu peso?"))
let agua = 35

function calcular (pesoCorporal, agua) {
    let quantidade = (pesoCorporal * agua)
    return quantidade
}

quantidade = calcular(pesoCorporal, agua)
console.log("A quantidade de água que você deve tomar em ml/dia é: " + quantidade + " ml")
alert("Seu peso é: " + pesoCorporal + "kg" + ", e você deve tomar " + quantidade + " ml de água por dia!")
