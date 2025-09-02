export  class Carro{
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

export  class Livro{
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
