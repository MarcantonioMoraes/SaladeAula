// node Bib_Loc_JS/main.js
class Livro{
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
    emprestar() {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} foi emprestado!`);
        } else {
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} não está disponível, pois está emprestado!`);
        }
    }
    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} foi devolvido!`);
        } else {
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} não é possível devolver pois não está emprestado!`);
        }
    }
}

class Filme{
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor
        this.emprestado = false;
    }
    emprestar() {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log(`O Filme: ${this.titulo}, do diretor: ${this.diretor} foi emprestado!`);
        } else {
            console.log(`O Filme: ${this.titulo}, do diretor: ${this.diretor} não está disponível, pois está emprestado!`);
        }
    }
    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            console.log(`O Filme: ${this.titulo}, do diretor: ${this.diretor} foi devolvido!`);
        } else {
            console.log(`O Filme: ${this.titulo}, do diretor: ${this.diretor} não é possível devolver pois não está emprestado!`);
        }
    }
}

class Usuario{
    constructor(nome) {
        this.nome = nome;
        this.itensEmprestados = [];
    }
    pegaritem(item) {
        if (!item.emprestado) {
            item.emprestar();
            this.itensEmprestados.push(item);
        } else {
            console.log(`O item ${item.titulo} não está disponível para empréstimo.`);
        }
    }
    devolveritem(item) {
        const index = this.itensEmprestados.indexOf(item);
        if (item.emprestado) {
            item.devolver();
            if (index > -1) {
                this.itensEmprestados.splice(index, 1);
            }
        } else {
            console.log(`O item ${item.titulo} não está emprestado.`);
        }
    }
}

class Biblioteca{
    constructor(){
        this.livros = []
    }
    adicionarLivro(livro){
         this.livros.push(livro);
         console.log(` O livro "${livro.titulo}" foi adicionado à biblioteca.`);
    }
    listaLivros(){
        console.log("\n Lista de livros na biblioteca:");
        this.livros.forEach((livro, index) => {
            console.log(`${index + 1}. "${livro.titulo}" - ${livro.autor} | ${livro.emprestado ? "Emprestado" : "Disponível"}`);
        });
    }

}

class Locadora{
    constructor(){
        this.filmes = []
    }
    adicionarFilme(filme){
        this.filmes.push(filme);
        console.log(` O filme "${filme.titulo}" foi adicionado à locadora.`);
    }
    listaFilmes(){
        console.log("\n Lista de filmes na locadora:");
        this.filmes.forEach((filme, index) => {
            console.log(`${index + 1}. "${filme.titulo}" - ${filme.diretor} | ${filme.emprestado ? "Emprestado" : "Disponível"}`);
        });
    }

}

const B1 = new Biblioteca();
const L1 = new Locadora();

B1.adicionarLivro(new Livro("Os Miseráveis", "Victor Hugo."));
B1.adicionarLivro(new Livro("1984", "George Orwell"));
B1.adicionarLivro(new Livro("A Cabana", "William P."));
B1.adicionarLivro(new Livro("Dom Casmurro", "Machado de Assis."));

L1.adicionarFilme(new Filme("Avatar: Fogo e Cinzas", "James Cameron."));
L1.adicionarFilme(new Filme("SUPERMAN", "James Gunn."));
L1.adicionarFilme(new Filme("Invocação do Mal – O Último Ritual", "Michael Chaves."));
L1.adicionarFilme(new Filme("Mickey 17", "Bong Joon-ho."));

B1.listaLivros();
L1.listaFilmes();







