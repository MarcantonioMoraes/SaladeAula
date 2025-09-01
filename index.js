import { player } from "./poo.mjs";

const jogador1 = new player ("Marcos",35,"Mago")
const jogador2 = new player ("Bruno",25,"Barbaro")

jogador1.ganharExperiencia(10*3)

console.log(`${jogador1.nome} tem ${jogador1.experiencia} pontos`)

//////////////////////////////////////////////////////////////////////////

// Exercicio 3
// import { contaBancaria } from "./poo.mjs";
//const readline = require('readline');

//const prompt = readline.createInterface({
    input: process.stdin, output: process.stdout
//});

// function perguntar(pergunta) {
//     return new Promise((resolve) => {
//         prompt.question(pergunta, (resposta) => {
//             const valor = Number(resposta.replace(',', '.'));
//             resolve(valor);
//         });
//     });
// }

// const usuario1 = new contaBancaria("Marcos", 1000);

// async function contaBancaria1() {
//     let depositar = await perguntar('Qual valor você deseja depositar? ');
//     usuario1.depositarSaldo(depositar);

//     let sacar = await perguntar('Qual valor você deseja sacar? ');
//     usuario1.sacarSaldo(sacar);

//     usuario1.mostraSaldo();

//     console.log(`O Sr ${usuario1.titular} depositou ${depositar}`);
//     console.log(`O Sr ${usuario1.titular} sacou ${sacar}`);
//     prompt.close();
// }
// contaBancaria1();

////////////////////////////////////////////////////////////////////////////

 // Exercicio 1
// import {Carroo} from "./poo.mjs";

// const carro1 = new Carroo ("Ford","Vermelho",2015);
// const carro2 = new Carroo ("Chevrolet","Azul",2020);

// carro2.velocidade = 50;

// carro1.acelerar();
// carro2.frear();
// carro1.mostraInfo();
// carro2.mostraInfo();

////////////////////////////////////////////////////////////////

//Exercicio 2
// import { Livro } from "./poo.mjs";
// import { Aluno } from "./poo.mjs";

// const livro1 = new Livro("Os Miseráveis", "Victor Hugo");
// const livro2 = new Livro("1984", "George Orwell");
// const aluno1 = new Aluno("Marcos");

// aluno1.emprestarLivro(livro1);

// console.log(`O livro ${livro1.titulo} do autor ${livro1.autor} está emprestado? ${livro1.emprestado ? "Sim" : "Não"}`);
// console.log(`O livro ${livro2.titulo} do autor ${livro2.autor} está emprestado? ${livro2.emprestado ? "Sim" : "Não"}`);
// console.log(`O aluno ${aluno1.nome} pegou o livro emprestado? ${livro1.emprestado ? "Sim" : "Não"}`);

//////////////////////////////////////////////////////////////////

// Exercicio 4
// import {Carro} from './poo.mjs';
// import {Estacionamento} from './poo.mjs';


// const carro1 = new Carro ("GPS7A58","VERDE");
// const carro2 = new Carro ("RTV5D87","AMARELO");
// const carro3 = new Carro ("SDS3C12","AZUL");
// const est1andar = new Estacionamento();
// const est2andar = new Estacionamento();

// est1andar.adicionarCarro(carro1);

// est2andar.adicionarCarro(carro2);
// est2andar.adicionarCarro(carro3);

// console.log(
//   `Estacionamento do primeiro andar: ${est1andar.listaCarros().map(carro => `${carro.placa} (${carro.cor})`).join(', ')}, ` +
//   `estacionamento segundo andar: ${est2andar.listaCarros().map(carro => `${carro.placa} (${carro.cor})`).join(', ')}`
// );