// Exemplos de comparações simples
console.log(5 == "5");   // Retornará true, pois compara apenas o valor, ignorando o tipo.
console.log(5 === "5");  // Retornará false, pois compara valor e tipo, e os tipos são diferentes.
console.log(5 != "5");   // Retornará false, pois ignora tipo, apenas valor.
console.log(5 !== "5");  // Retornará true, pois compara valor e tipo, estritamente diferentes.

// Exemplo prático
let idade = "18"; // Como exemplo, o valor pode vir de um formulário, como string.

if (idade == 18) {
  console.log("A idade é 18!");
}

if (idade === 18) {
  console.log("A idade é 18!");
} else {
  console.log("A idade não é 18!");
}

// No exemplo acima, o if que utiliza == identifica que a idade é 18, mesmo sendo uma string, 
// enquanto o if que utiliza === identifica que a idade não é 18, pois os tipos são diferentes.
