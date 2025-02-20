function somar2Mais2(){
return 2 + 2;
}
console.log(somar2Mais2());

// criando uma funçao que soma dois valores e retorna o resultado
function somar(val1, val2){
  return val1 + val2
}
  console.log("5 + 3 =", somar(5, 3));
  console.log("12 + 8 =", somar(12, 8));
  console.log("6,5 + 2,12 =", somar(6.5, 2.12));

  var v1 = 9;
  var v2 = 6;
  console.log("v1 + v2 =", somar(v1, v2));
  
  //criando uma funçao que escreve "Bom dia!"
function bomDia(nome) {
console.log("Ola", nome, "muito bom dia para você!");
}

bomDia("ana clara");

// criando uma função que calcula e retorna o desfconto em uma venda
function desconto(valor){
    return valor * 5 / 100;
};

console.log("O desconto do produto no valor de R$100,00 é R$", desconto(100));

var totalPedido = 300;
var totalDesconto = desconto(totalPedido)
var valorFinal = totalPedido - totalDesconto;

console.log("-----------------------------------");
console.log("Total do pedido: R$", totalPedido);
console.log("Total dos descontos: R$", totalDesconto);
console.log("Valor líquido: R$", valorFinal);

// criando uma funçao que apresenta pessoas com arrow fuction
const apresentaPessoas = (nomePessoa,idade,cidade) => {
    // "Apresento" a voces: "Nome Pessoa", que tem xx anos e mora em "Cidade" 
    console.log("Apresenta a vocês:", nomePessoa,"que tem",idade,"anos e mora em",cidade);
};
apresentaPessoas("Otto", 19, "Brotas");
apresentaPessoas("Heitor", 21, "Jau");
apresentaPessoas("Cloe", 16, "Barra Bonita");



