// class player {
//     constructor (nome,idade,classe){
//         this.nome = nome;
//         this.idade = idade;
//         this.classe = classe;
//         this.experiencia = 0;
//     }
//     ganharExperiencia(pontos) {
//         this.experiencia += pontos;
//     }
// }

// const jogador1 = new player ("Marcos",35,"Mago")
// const jogador2 = new player ("Bruno",25,"Barbaro")

// jogador1.ganharExperiencia(10*3)

// console.log(`${jogador1.nome} tem ${jogador1.experiencia} pontos`)
///////////////////////////////////////////////////////////////////////////
// Exercicio 3
// class contaBancaria{
//     constructor(titular,saldo){
//         this.titular = titular;
//         this.saldo = saldo;
//     }
//     depositarSaldo(depositar){
//         this.saldo += depositar;
//     }
//     sacarSaldo(sacar){
//         this.saldo -= sacar;
//     }
//     mostraSaldo(){
//         console.log (`Seu saldo é de ${this.saldo}`)
//     }
// }

// const readline = require('readline');
// const prompt = readline.createInterface({
//     input: process.stdin, output: process.stdout
// });

// function perguntar(pergunta) {
//     return new Promise((resolve) => {
//         prompt.question(pergunta, (resposta) => {
//          const valor = Number(resposta.replace(',', '.'));
//             resolve(valor);
//         });
//     });
// }

// const usuario1 = new contaBancaria("Marcos",1000);

// async function contaBancaria1() {
    
//     let depositar = await perguntar('Qual valor você deseja depositar? ');
//     let sacar = await perguntar('Qual valor você deseja sacar? ');

//     if (depositar) {
//         usuario1.depositarSaldo(depositar);
//     }
//     if (sacar) {
//         usuario1.sacarSaldo(sacar);
//     }
//     usuario1.mostraSaldo();

//     console.log(`O Sr ${usuario1.titular} depositou ${depositar}`);
//     console.log(`O Sr ${usuario1.titular} sacou ${sacar}`);
//     console.log(`O Sr ${usuario1.titular} seu saldo é ${usuario1.mostraSaldo()}`);
//     prompt.close();
// }
// contaBancaria1();
////////////////////////////////////////////////////////////////////////////
// Exercicio 1
// class carro{
//     constructor (marca,cor,ano){
//     this.marca = marca;
//     this.cor = cor;
//     this.ano = ano;
//     this.velocidade = 0;
//     }
//     acelerar(){
//         this.velocidade += 10;
//     }
//     frear(){
//         this.velocidade -= 10;
//     }
//     mostraInfo(){
//         console.log(`O veiculo da marca: ${this.marca} de cor: ${this.cor} do ano: ${this.ano} está á ${this.velocidade} km!`);
//     }
// }

// const carro1 = new carro ("Ford","Vermelho",2015);
// const carro2 = new carro ("Chevrolet","Azul",2020);

// carro2.velocidade = 50;

// carro1.acelerar();
// carro2.frear();
// carro1.mostraInfo();
// carro2.mostraInfo();
//////////////////////////////////////////////////////////////////
// Exercicio 2
class livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
}

class aluno {
    constructor(nome) {
        this.nome = nome;
    }
    emprestarLivro(livro) {
        livro.emprestado = true;
    }
}

const livro1 = new livro("Os Miseráveis", "Victor Hugo");
const livro2 = new livro("1984", "George Orwell");
const aluno1 = new aluno("Marcos");

aluno1.emprestarLivro(livro1);

console.log(`O livro ${livro1.titulo} do autor ${livro1.autor} está emprestado? ${livro1.emprestado ? "Sim" : "Não"}`);
console.log(`O livro ${livro2.titulo} do autor ${livro2.autor} está emprestado? ${livro2.emprestado ? "Sim" : "Não"}`);
console.log(`O aluno ${aluno1.nome} pegou o livro emprestado? ${livro1.emprestado ? "Sim" : "Não"}`);
