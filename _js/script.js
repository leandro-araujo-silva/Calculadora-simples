var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt("Digite 0 para exponenciação; 1 para fazer uma divisão; 2 para multiplicação; 3 para soma ou 4 para subtração: ")

if (operacao == 0) {
    var resultado = (primeiroValor ** segundoValor)
    document.write("<h2>" + primeiroValor + " ^ " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3)  {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4)  {
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
    document.write("<h2>Opção inválida!</h2>")
}



// escrevendo na tela - document.write()
// concatenação (juntar palavras com variáveis) - ("palavras" + variável)
// == - comparação é diferente do = que usamos para fazer atribuição
// if = se
// else = senão
// else if = senão se




/*
var nomeDoJogo = "League of Legends"
document.write("Joggo da Rafa " + nomeDoJogo)
*/