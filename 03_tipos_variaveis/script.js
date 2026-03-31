// TIPOS DE VARIÁVEIS

// var - Esse tipo de variável pode ser redeclarado e tem escopo de função.
var nome = "Guilherme";
var nome = "Lucas"; // Isso faz com que o valor atribuído a "nome" seja sobrescrito.

console.log(nome); // A mensagem exibida no console será "Lucas", que foi o último valor atribuído.

// let - Esse tipo de váriavel pode ser atualizado, mas não redeclarado.
let idade = 22;
idade = 27; // Atualiza o valor de "idade" sem redeclarar a variável.

console.log(idade); // A mensagem exibida no console será "27".

// const - Esse tipo de variável recebe um valor constante que não pode ser modificado de qualquer forma.

const PI = 3.1415926; // Tentar modificar esse valor resultaria em um erro, por exemplo, caso houvesse a tentativa de reatribuir um valor para "PI".

console.log(PI); 

// EXEMPLOS DE ESCOPOS E VARIÁVEIS INACESSÍVEIS

if (true) {
    var acessivel = 1; // Essa varíavel é visível em todo o código, em qualquer lugar da função.
    let restrita = 2; // Essa variável só pode ser acessada dentro deste bloco.

    console.log(restrita); // O valor da variável é exibido corretamente, pois está dentro do bloco.
}

console.log(acessivel); // O valor desta variável também é exibido corretamente, pois é acessível fora do bloco.

console.log(restrita); // A tentativa de exibir esta variável retorna um erro, pois não é acessível fora do bloco.