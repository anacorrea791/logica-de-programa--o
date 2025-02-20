// 1. crie uma funçao que receba como parametro o ano de nascimento de uma pessoa a retorne sua idade
// 2. crie uma funçao que receba a quantidade de combustivel de um carro e
// retorne quantas Kms ele pode viajar com esse combustivel.
// Considere que o veículo  faz uma media de 12 Kms/L.
console.log("--------------atividade1----------------");
function nascimento(nome, nasceu) {
  let idade = 2025 - nasceu;
  console.log(
    "Apresento a voces:",
    nome,
    "que nasceu em:",
    nasceu,
    "e tem",
    idade,
    "anos"
  );
}
nascimento("ana clara", "2009");
console.log("-----------------atividade2---------------");
const combustivel = (Litro) => {
  return Litro * 12;
};
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("Carro 1:", car1, "->", combustivel(car1), "kms.");
console.log("Carro 1:", car2, "->", combustivel(car2), "kms.");
console.log("Carro 1:", car3, "->", combustivel(car3), "kms.");

