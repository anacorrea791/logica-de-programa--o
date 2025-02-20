/***************************************************** 
                Lista de Exercícios 
*****************************************************/
/*  
1. Realize as seguintes instruções: - Crie uma variável texto e armazene o nome de uma pessoa - Crie uma variável numérica e armazene o ano de nascimento - Escreva "Nome da pessoa" nasceu em "ano de nascimento" - Calcule a idade da pessoa - Escreva "Nome da pessoa" tem "idade" anos 
2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?  
3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume?  
4. Se temos uma equação 2x2 + 3x -1, qual seria o valor de delta?  
5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. 
Qual o valor do desconto e o valor final da compra ?  
6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h.  
Calcule a distância percorrida, sabendo que Vmedia = S/T 
*/

var nome = "ana clara"
var nascimento = 2009
console.log(nome, "nasceu em ", nascimento)
var idade = 2025 - nascimento
console.log(nome,"tem", idade,"anos")
console.log("-----------atividade1-----------")
var base = 12;
var altura = 6;
var area = base * altura;
console.log("A area do retangulo de base" ,base,"e altura",altura,"é:",area);
console.log("---------------atividade2----------------")
var profundidade = 5;
var volume = area * profundidade;
console.log("O volume do retangulo é:", volume)
console.log("--------------------atividade3-----------------")
var a = 2
var b = 3
var c = -1
var delta = b ** 2 - 4 * a * c;
console.log("o valor de delta é:", delta)
console.log("----------------------atividade4-----------")
var compra = 450
var desconto = 0.03 // var desconto = 3/100
desconto = compra * desconto;
var total = compra - desconto
console.log("compra: R$", compra," - desconto R$",desconto," = total:", total)
console.log("----------------------atividade5------------")
var tempo = 3.5
var velocidade = 95
var distancia = tempo * velocidade
console.log("a distancia percorrida é de:", distancia, "km")
console.log("------------atividade6----------")








