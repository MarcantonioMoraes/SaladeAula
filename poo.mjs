export class Carro{
    constructor(placa,cor){
        this.placa = placa;
        this.cor = cor;
    };
};

export class Estacionamento{
    constructor(){
        this.vagas = [] // [] array vazio
    }
    // metodo para adicionar carro
    adicionarCarro(carro){
        this.vagas.push(carro);
    }
    // metodo para listar carros
    listaCarros(){
        return this.vagas;
    };
};

export class Livro{
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
}

export class Aluno{
    constructor(nome) {
        this.nome = nome;
    }
    emprestarLivro(Livro) {
        Livro.emprestado = true;
    }
}

export class Carroo{
    constructor (marca,cor,ano){
    this.marca = marca;
    this.cor = cor;
    this.ano = ano;
    this.velocidade = 0;
    }
    acelerar(){
        this.velocidade += 10;
    }
    frear(){
        this.velocidade -= 10;
    }
    mostraInfo(){
        console.log(`O veiculo da marca: ${this.marca} de cor: ${this.cor} do ano: ${this.ano} está á ${this.velocidade} km!`);
    }
}

export class contaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositarSaldo(depositar) {
        if (isNaN(depositar) || depositar <= 0) {
            console.log("Valor de depósito inválido!");
            return;
        }
        this.saldo += depositar;
    }
    sacarSaldo(sacar) {
        if (isNaN(sacar) || sacar <= 0) {
            console.log("Valor de saque inválido!");
            return;
        }
        if (sacar > this.saldo) {
            console.log("Saldo insuficiente!");
            return;
        }
        this.saldo -= sacar;
    }
    mostraSaldo() {
        console.log(`Seu saldo é de ${this.saldo}`);
    }
}

export const readline = require('readline');

export class player {
    constructor (nome,idade,classe){
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.experiencia = 0;
    }
    ganharExperiencia(pontos) {
        this.experiencia += pontos;
    }
}
