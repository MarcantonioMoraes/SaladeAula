// node Bib_Loc_JS/main.js
class Livro{
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
    emprestar() {
        if (!this.emprestado){
            this.emprestado = true
            console.log (`O Livro: ${this.titulo}, do autor: ${this.autor} foi emprestado ao Sr(a) $`)
        }else{
            console.log (`O Livro: ${this.titulo}, do autor: ${this.autor} não está disponível, pois está emprestado!`)
        }
    }
    devolver(){
        if(this.emprestado){
            this.emprestado = false
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} foi devolvido!`)
        }else{
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} não é possivel devolver pois não está emprestado!`)
        }
    }
}

class Filmes{
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor
        this.emprestado = false;
    }
    emprestar() {
        if (!this.emprestado){
            this.emprestado = true
            console.log (`O Livro: ${this.titulo}, do autor: ${this.autor} foi emprestado ao Sr(a) $`)
        }else{
            console.log (`O Livro: ${this.titulo}, do autor: ${this.autor} não está disponível, pois está emprestado!`)
        }
    }
    devolver(){
        if(this.emprestado){
            this.emprestado = false
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} foi devolvido!`)
        }else{
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} não é possivel devolver pois não está emprestado!`)
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



const livroA = new Livro("Os Miseráveis", "Victor Hugo.");
const livroB = new Livro("1984", "George Orwell.");
const livroC = new Livro("A Cabana", "William P.");
const livroD = new Livro("Dom Casmurro", "Machado de Assis.");

const filmeA = new Filme("Avatar: Fogo e Cinzas", "James Cameron.");
const filmeB = new Filme("SUPERMAN", "James Gunn.");
const filmeC = new Filme("Invocação do Mal – O Último Ritual", "Michael Chaves.");
const filmeD = new Filme("Mickey 17", "Bong Joon-ho.");

livroA.emprestar();
livroA.emprestar();
livroB.devolver();
livroA.devolver();
