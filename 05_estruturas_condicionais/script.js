// If
let numero = 6;

if (numero > 5) {
  console.log("O número é maior que 5.");
}

// No exemplo acima, o bloco if irá comparar o valor armazenado na varíavel
// com o número 5. E nesse caso, a condição é verdadeira, já que 6 é maior que 5.

// if else
let idade = 17;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você ainda não é maior de idade.");
}

// No exemplo acima, o bloco if irá comparar o valor armazenado na variável idade com o número 18.
// Nesse caso, a condição é falsa, já que 17 é menor que 18, fazendo com que o bloco else seja executado.

// switch 
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("A cor escolhida foi vermelho.");
    break;
  case "azul":
    console.log("A cor escolhida foi azul.");
    break;
  case "verde":
    console.log("A cor escolhida foi verde.");
    break;
  default:
    console.log("Cor não especificada.");
}

// No exemplo acima, o bloco switch irá comparar o valor armazenado na variável cor com as opções definidas nos cases.
// Nesse caso, a condição é verdadeira para o case é "azul".
// Caso nenhuma cor seja especificada, o bloco default será executado.