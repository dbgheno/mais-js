// const numero = 10

// if (numero > 15) {
//     alert("é maior que 15")
// } 
// else {
//     alert("é menor que 15")
// }

// const variavel = prompt()

// alert(typeof variavel)


document.write(`Atividade Prática 01 - Lógica simples e
estruturas condicionais 1<br><br>`)

// exercício 1
const myAge = 34
document.write(`1. Minha idade é ${myAge} anos <br><br>`)


// exercício 2
const num1 = 10
const num2 = 20
const sum = num1 + num2
document.write(`2. O resultado da soma de ${num1} e ${num2} é ${sum} <br><br>`)


//exercício 3
const totalCompra = 149.90
const parcelas = 2
const valorParcela = totalCompra / parcelas
document.write(`O valor total da compra é R$${totalCompra.toFixed(2).toString().replace('.',',')} <br><br>`)
document.write(`3. Forma de pagamento ${parcelas}x de R$${valorParcela.toFixed(2).toString().replace('.',',')} <br><br>`)


// exercício 4
const totalMinutes = 120
const totalSeconds = totalMinutes * 60
document.write(`4. ${totalMinutes} minutos equivale à ${totalSeconds} segundos <br><br>`)


// exercício 5
const nomeAluno = "Daniel"
const nota1 = 9.4
const nota2 = 9.2
const nota3 = 9.7
const media = (nota1+nota2+nota3)/3
document.write(`5. O aluno ${nomeAluno} ficou com média ${media.toFixed(1).replace('.',',')} <br><br>`)


// exercício 6
let A = 10
let B = 20
let C = A
A = B
B = C
document.write(`6. Valor da variavel que era da A que virou da B: ${A} <br> e valor que era da variável B e que virou da A: ${B}<br><br>`)


// exercício 7
const eleitores = 15000
const votosBrancos = 2875
const votosNulos = 3215
const votosValidos = eleitores - votosBrancos - votosNulos

const percentualValidos = (votosValidos*100)/eleitores
const percentualBrancos = (votosBrancos*100)/eleitores
const percentualNulos = (votosNulos*100)/eleitores

document.write(`7. Votos válidos: ${percentualValidos.toFixed(1)}%; Votos brancos: ${percentualBrancos.toFixed(1)}%; Votos nulos: ${percentualNulos.toFixed(1)}% <br><br>`)


// exercício 8
const valor1 = 5
const valor2 = 7

if (valor1===valor2) {
    document.write(`8. Os números são iguais!<br><br>`)
} else if (valor1>valor2) {
    document.write(`8. O primeiro é maior!<br><br>`)
} else if (valor1<valor2) {
    document.write(`8. O segundo é maior!<br><br>`)
}


// exercício 9
let precoMacas
let quantidadeComprada

quantidadeComprada = 25

if (quantidadeComprada >= 12) { precoMacas=0.25 } else { precoMacas=0.30}

const custoCompra = quantidadeComprada*precoMacas
document.write(`9. O valor total da compra de ${quantidadeComprada} maçãs fica R$${custoCompra.toFixed(2).replace('.',',')}.<br><br>`)


// exercício 10
const nomeUsuario = "Zé"
const idadeUsuario= 25
const anoAtual= 2023
document.write(`10. Nome: ${nomeUsuario} - Idade: ${idadeUsuario} - Nasceu em ${(anoAtual-idadeUsuario)} <br><br>`)


// exercício 11
const inteiroPositivo1 = 13
if (inteiroPositivo1%2===1) {
    document.write(`11. O número é ímpar!<br><br>`)
} else {
    document.write(`11. O número é par!<br><br>`)
}

// const inteiroPositivo2= parseFloat(prompt(`Exercício 11. Digite um número:`))
// if (inteiroPositivo2%2===1) {
//     alert(`Número é ímpar!`)
// } else {
//     alert(`Número é par!`)
// }




// exercício 12
const anoAtual2 = 2023
const anoDeNascimento = 1989

const idade2 = anoAtual2 - anoDeNascimento

if (idade2 >= 16) {
    document.write(`12. Você pode votar este ano!<br><br>`)
} else {
    document.write(`12. Você não pode votar este ano.<br><br>`)
}
