/*********************************************************************************************
                                lista de Exercícios                                              
**********************************************************************************************/
 /*
 Dada  a matriz abaixo, faça um programa em JavaScript que exiba ao usuário os elementos da sua diagonal principal com laço FOR.

 | 3 5 8 |
 | 1 9 2 |
 | 7 1 4 |
 */
 
 var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
   ];
  for(let linha = 0;linha<matriz.length; linha++){
  for(let coluna = 0;coluna<matriz[0].length; coluna++)
  {
  // console.log("Matriz[", linha, "][", coluna, "] =",matriz[linha][coluna])
  console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
  }
  
   console.log("Matriz[ linha 0 coluna 0] =", matriz [0][0]);
  
 