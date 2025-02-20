/*********************************************************************************************** *
 *    |        |      Lista de Exercícios 06 |         |           |          |          |          |
 * ************************************************************************************************/
/*
Crie uma funçao que receba o nome e a idade de uma pessoa e retorne uma mensagem informada se ela pode votar no Brasil
Regras para votaçao no Brasil:
Menosres de 16 anos: Não podem votar.
Entre 16 e 17 anos ou acima de 70 anos: o vetor é facultativo.
Entre 18 e 70 anos: o voto é obrigatorio
*/
var idade = 19;
var nome = "ana clara";
console.log("nome", nome, "idade", idade,);
var votaçao = idade >= 19 ? "Pode votar!" : "Não pode votar";
console.log("idade:", idade, "-", votaçao);
console.log("-----------------------")
var idade = 70;
var nome = "Cleide";
console.log("nome", nome, "idade", idade,);
var votaçao = idade >= 70 ? "O voto é facultativo!" : "Não pode votar";
console.log("idade:", idade, "-", votaçao);
console.log("--------------------------------")
var idade = 16;
var nome = "lari";
console.log("nome", nome, "idade", idade,);
var votaçao = idade >= 16 ? " não pode votar!" : "Pode votar";
console.log("idade:", idade, "-", votaçao);
console.log("---------------------------")
var idade = 35;
var nome = "Kaique";
console.log("nome", nome, "idade", idade,);
var votaçao = idade >= 35 ? "Pode votar!" : "Não pode votar";
console.log("idade:", idade, "-", votaçao);


console.log("--------------correçao--------------");
const podeVotar = (idade) => {  //isso é uma funçao
    if (idade < 16){
    return "Nao pode votar";
    }else if(idade >= 18 && idade < 70) {
        return "Pode votar!"
    }else{
        return "Voto facultativo"
    }
    };
    var nome = ["Ygona", "Batata", "Fernanda", "Cristina"];
    console.log("Ola", nome[0], "voce tem 16 anos e", podeVotar(16));
    console.log("Ola", nome[1], "voce tem 22 anos e", podeVotar(22));
    console.log("Ola", nome[2], "voce tem 70 anos e", podeVotar(70));
    console.log("Ola", nome[3], "voce tem 12 anos e", podeVotar(12));
    