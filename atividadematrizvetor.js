// crie um vetor que receberá dados de um usuário.
var dados = [];
console.log("favor informar seu nome:");
dados.push("ana clara");
console.table(dados);
console.log("informe seu cpf:");
dados.push("123.456.789-09");
console.table(dados);

// mostre ao usuario os dados e de um bom dia!
console.log("bom dia",dados[0], "seu CPF é:", dados[1]);

