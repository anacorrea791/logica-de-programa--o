/***************************************************** 
                Exercícios para fixação 
*****************************************************/ 
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/ 

let nome = "ana clara";
let banco = "bradesco";
let agencia = 34;
let conta = 300;
let saldo = 10000;
console.log("meu saldo é", saldo);
console.log("****************", banco,"******************");
console.log("Cliente:", nome);
console.log("Agencia:" , agencia, "| Conta", conta);
console.log("Seu saldo é de R$", saldo);

console.log("   + Deposito: R$50,00");
saldo = saldo + 50;
console.log("   + Deposito: R$100,00");
saldo = saldo + 150;
console.log("   - Saque: R$150,00");
saldo = saldo -150;
console.log("     - Saque: R$200,00");
saldo = saldo -200
console.log("    + Deposito: R$50,00");
saldo += 50; //mesma coisa que > saldo =saldo + 50;










