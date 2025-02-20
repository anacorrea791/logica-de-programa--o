//criando variaveis do tipo array (VETOR)
var numeros = [1, 2, 3, 4, 5];
console.log(numeros); //imprimindo os dados do array
console.table(numeros); //imprimindo os dados em forma de tabela
console.log(numeros[1]); //imprimindo o item de indice 1
console.log("o vetor tem:", numeros.length, "elementos.");

var dinos = ["Tiranossauros Rex", "Estegossauro","Anquilossauro", "Titanossauro",];
console.log(dinos); // imprimindoos dados
console.table(dinos); //imprimindo os dados em forma de tabela
console.log("o vetor dinos tem:", dinos, "elementos.");

//adicionando elementos a um vetor existente
dinos.push("Brontossauro");
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("Tricerátops"); //adiciona um elemento no inicio do vetor
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos.");

//obtendo um elemento com base em seu indice (posição)
console.log("1ª posição:", dinos[0]);
console.log("3ª posição:", dinos[2]);
console.log("20ª posição:", dinos[19]); // quandonão temos o item,apresenta um erro (undefined)

//alterando elementos com base em seu indice (posição)
dinos[3] = "Velociraptor";
console.table(dinos);

//removendo elementos do vetor
var dinos = ["Tiranossauros Rex", "Estegossauro","Anquilossauro", "Titanossauro", "Brontossauro", "Triceratops"]
;
console.table(dinos);

dinos.pop(); //removendo o ultimo elemento do array (vetor)
console.log(dinos);

dinos.shift(); //remove o primeiro elemento do array (vetor)
console.table(dinos);

dinos.slice(1, 1); //removendo o elemento da indice 1 (a partir da posição 1, exclui 1 elemento)
console.log(dinos);

var dinos = ["Tricerátops","Tiranossauro Rex","Estegossauro","Anquilossauro","Brontgossauro","Ictiossauro","Pterodáctilo","Espinossauro"];
console.table(dinos);

var elementoProcurado = "Pterodáctilo";
var posição = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no índice:", posição);


elementoProcurado = "Castelloussauro";
posição = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no indice:", posição);
console.log("indexOf = -1 significa que o elemento não foi encotrado no vetor!")

// excluindo um elemento com base no seu nome
var elementoExcluir = "Pterodáctilo"
var posiçao = dinos.indexOf(elementoExcluir);
dinos.splice(posiçao, 1);
console.log(dinos);

//Criando umacópia de um array (vetor)
var copia = dinos.slice();
console.log("Copiando um vetor!");
console.table(copia);

//criando um array numerico
var numero = [4, 3, 1, 9, 7, 2];
console.table(numero);


//imprimindo os elementos das posiçoes impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

//verificando se a array contem um item 
console.log("contem 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("contem 0:", contem0);

//olrdenando os elementos do vetor
numeros.sort();
console.log(numero);

//invertendo a ordem ou posiçao itens
numeros.reverse();
console.table(numero);

//alterando o valor de um elemento com base em sua posiçao
numeros[2] = 5;
console.table(numero);

numero[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numero);

//criando arrays hibridos 
var hibrido = [10, "Pafúncio", 3.45, "Zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "Tibúrcio";
console.table(hibrido);

// criando uma matriz
var matriz = [
    [9,0,1],
    [7, 1, 2],
    [1, 3, 9],
];
console.table(matriz);

//obtendo elemento com base em seus indices 
console.log("Matriz[1,2 =", matriz[1][2]);
console.log("Matriz[2,0] =", matriz[2][0]);

// alterando valores de elementos com base em seus indices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);




