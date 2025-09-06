// node Bib_Loc_JS/main.cjs
class Livro{
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
    emprestar() {
        if (this.emprestado) {
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} não está disponível, pois está emprestado!`);
        } else {
             this.emprestado = true;
            console.log(`O Livro: ${this.titulo}, do autor: ${this.autor} foi emprestado!`);      
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
        if (this.itensEmprestados.length >= 3) {
            console.log(`O usuário ${this.nome} já atingiu o limite de 3 itens emprestados!`);
            return;
        }
        if (!item.emprestado) {
            item.emprestar();
            this.itensEmprestados.push(item);
        } else {
            console.log(`O item ${item.titulo} não está disponível para empréstimo.`);
        }
    }
    devolveritem(item) {
       //const itemdevolvido = this.itensEmprestados.find(i => i.titulo === item.titulo);
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
const usuarios = [];

const livro8 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry");
B1.adicionarLivro(livro8);

B1.adicionarLivro(new Livro("Os Miseráveis", "Victor Hugo."));
B1.adicionarLivro(new Livro("1984", "George Orwell"));
B1.adicionarLivro(new Livro("A Cabana", "William P."));
B1.adicionarLivro(new Livro("Dom Casmurro", "Machado de Assis."));

L1.adicionarFilme(new Filme("Avatar: Fogo e Cinzas", "James Cameron."));
L1.adicionarFilme(new Filme("SUPERMAN", "James Gunn."));
L1.adicionarFilme(new Filme("Invocação do Mal – O Último Ritual", "Michael Chaves."));
L1.adicionarFilme(new Filme("Mickey 17", "Bong Joon-ho."));

// B1.listaLivros();
// L1.listaFilmes();

const readline = require('readline');
const prompt = readline.createInterface({
    input: process.stdin, output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        prompt.question(pergunta, (resposta) => {
            resolve(resposta.trim());
        });
    });
}


async function MostraMenu(){
    console.log("\n Menu de opções:");
    console.log("1. Adicionar livros");
    console.log("2. Adicionar filmes");
    console.log("3. Adicionar Usuário");
    console.log("4. Listar Livros ");
    console.log("5. Listar Filmes ");
    console.log("6. Emprestar Livro");
    console.log("7. Devolver Livro");
    console.log("8. Emprestar Filme");
    console.log("9. Devolver Filme");
    console.log("0. Sair");

    while(true){
        
        const opcao = await perguntar("Escolha uma opção: ");

        switch(opcao) {
            case "1":
                const tituloLivro = await perguntar("Digite o título do livro: ");
                const autorLivro = await perguntar("Digite o autor do livro: ");
                B1.adicionarLivro(new Livro(tituloLivro, autorLivro));
                break;
            case "2":
                const tituloFilme = await perguntar("Digite o título do filme: ");
                const diretorFilme = await perguntar("Digite o diretor do filme: ");
                L1.adicionarFilme(new Filme(tituloFilme, diretorFilme));
                break;
            case "3":
                const nomeUsuario = await perguntar("Digite o nome do usuário: ");
                const usuario = new Usuario(nomeUsuario);
                usuarios.push(usuario);
                console.log(`Usuário ${nomeUsuario} adicionado com sucesso!`);
                break;
            case "4":
                B1.listaLivros();
                break;
            case "5":
                L1.listaFilmes();
                break;
            case "6":
                const tituloLivroEmprestimo = await perguntar("Digite o título do livro que deseja emprestar: ");
                const livroEmprestimo = B1.livros.find(livro => livro.titulo === tituloLivroEmprestimo);
                if (livroEmprestimo) {
                    const usuarioEmprestimo = await perguntar("Digite o nome do usuário: ");
                    const usuarioEncontrado = usuarios.find(u => u.nome === usuarioEmprestimo);
                    if (usuarioEncontrado) {
                        usuarioEncontrado.pegaritem(livroEmprestimo);
                    } else {
                        console.log("Usuário não encontrado.");
                    }
                } else {
                    console.log("Livro não encontrado.");
                }
                break;
            case "7":
                const tituloLivroDevolucao = await perguntar("Digite o título do livro que deseja devolver: ");
                const livroDevolucao = B1.livros.find(livro => livro.titulo === tituloLivroDevolucao);
                if (livroDevolucao) {
                    const usuarioDevolucao = await perguntar("Digite o nome do usuário: ");
                    const usuarioEncontrado = usuarios.find(u => u.nome === usuarioDevolucao);
                    if (usuarioEncontrado) {
                        usuarioEncontrado.devolveritem(livroDevolucao);
                    } else {
                        console.log("Usuário não encontrado.");
                    }
                } else {
                    console.log("Livro não encontrado.");
                }
                break;
            case "8":
                const tituloFilmeEmprestimo = await perguntar("Digite o título do filme que deseja emprestar: ");
                const filmeEmprestimo = L1.filmes.find(filme => filme.titulo === tituloFilmeEmprestimo);
                if (filmeEmprestimo) {
                    const usuarioEmprestimo = await perguntar("Digite o nome do usuário: ");
                    const usuarioEncontrado = usuarios.find(u => u.nome === usuarioEmprestimo);
                    if (usuarioEncontrado) {
                        usuarioEncontrado.pegaritem(filmeEmprestimo);
                    } else {
                        console.log("Usuário não encontrado.");
                    }
                } else {
                    console.log("Filme não encontrado.");
                }
                break;
            case "9":
                const tituloFilmeDevolucao = await perguntar("Digite o título do filme que deseja devolver: ");
                const filmeDevolucao = L1.filmes.find(filme => filme.titulo === tituloFilmeDevolucao);
                if (filmeDevolucao) {
                    const usuarioDevolucao = await perguntar("Digite o nome do usuário: ");
                    const usuarioEncontrado = usuarios.find(u => u.nome === usuarioDevolucao);
                    if (usuarioEncontrado) {
                        usuarioEncontrado.devolveritem(filmeDevolucao);
                    } else {
                        console.log("Usuário não encontrado.");
                    }
                } else {
                    console.log("Filme não encontrado.");
                }
                break;
            case "0":
                console.log("Saindo...");
                prompt.close();
                return;
            default:
                console.log("Opção inválida.");
        }
    }
}
MostraMenu();
