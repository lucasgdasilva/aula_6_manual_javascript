// Função sem parâmetro
function helloWorld() {
  console.log("Hello, World!");
}

helloWorld(); // Chama a função.

// O exemplo acima mostra uma função simples, que ao ser chamada, executa o código
// que imprime "Hello, World!" no console. Essa função não recebe nenhum parâmetro.

// Função com parâmetro
function exibirNome(nome) {
  console.log("Seu nome é: " + nome);
}

exibirNome("Lukas"); // Chama a função passando um argumento.

// O exemplo acima define uma função chamada "exibirNome" que recebe um parâmetro "nome".
// Quando a função é chamada, ela identifica o parâmetro, que nesse caso é "Lukas", e imprime "Seu nome é: Lukas" no console.

// Função que retorna valor
function somar(a, b) {
  return a + b; 
}

let resultado = somar(5, 3);
console.log("O resultado da soma é: " + resultado);

// O exemplo acima define uma função chamada "somar" que recebe dois parâmetros, "a" e "b".
// A função retorna a soma desses dois parâmetros. 