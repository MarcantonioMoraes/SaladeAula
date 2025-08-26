// let frutas = ["maçã", "banana", "laranja"];
// let nomes = ["João", "Maria", "Pedro", "Marcos"];
// let numeros = new Array(1, 2, 3, 4, 5);
// let inteiros = [-3,-2,-1,0,1,2,3]
// let inversa = [0,1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }
// console.log(inteiros);
// console.log(inversa.reverse());

// const readline = require('readline');
// const prompt = readline.createInterface({
//     input: process.stdin, output: process.stdout
// });

// function perguntar(pergunta) {
//     return new Promise((resolve) => {
//         prompt.question(pergunta, (resposta) => {
//             const valor = Number(resposta.replace(',', '.'));
//             resolve(valor);
//         });
//     });
// }

// async function medalhaDeAcordoComPosicao () {
//     let numero = await perguntar('Digite sua posição na corrida (1, 2 ou 3): ');
//     const posicoes = ["ouro", "prata", "bronze", "Nada"];

//     while (isNaN(numero) || numero < 1 || numero > 3) {
//         if (numero === 0 || numero > 3 || numero < 0) {
//             console.log(posicoes[3]);
//             prompt.close();
//             return;
//         }
//         console.log("Valor inválido. Por favor, insira um número entre 1 e 3.");
//         numero = await perguntar('Digite sua posição na corrida (1, 2 ou 3): ');
//     }

//     console.log("Parabéns! Você ganhou a medalha de");
//     console.log(posicoes[numero - 1]);
//     return medalhaDeAcordoComPosicao();
// }
// medalhaDeAcordoComPosicao();


// let fruit = ["Apple", "Banana", "Orange"];
// console.log(fruit);
// fruit.push("Kiwi");
// console.log(fruit);
// fruit.pop();
// console.log(fruit);
// fruit.unshift("Strawberry");
// console.log(fruit);
// fruit.shift();
// console.log(fruit);

