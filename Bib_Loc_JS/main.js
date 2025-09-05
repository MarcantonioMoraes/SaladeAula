// node Bib_Loc_JS/main.js
class Livro{
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
    emprestar() {
        if (this.emprestado){
            this.emprestado === true
            console.log (`O Livro: ${this.titulo}, do autor: ${this.autor} foi emprestado ao Sr(a) $`)
        }else{
            console.log (`O Livro: ${this.titulo}, do autor: ${this.autor} esta disponivel!`)
        }
    }
    devolver(){
        if(!this.emprestado){
            this.emprestado === false
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} foi devolvido!`)
        }else{
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} não é possivel devolver!`)
        }
    }
}

const livroA = new Livro("Os Miseráveis", "Victor Hugo.");
const livroB = new Livro("1984", "George Orwell.");
const livroC = new Livro("A Cabana", "William P.");
const livroD = new Livro("Dom Casmurro", "Machado de Assis.");



