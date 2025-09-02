const readline = require('readline');
const prompt = readline.createInterface({
    input: process.stdin, output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        prompt.question(pergunta, (resposta) => {
            const valor = Number(resposta.replace(',', '.'));
            resolve(valor);
        });
    });
}

class contaBancaria {
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

const usuario1 = new contaBancaria("Marcos", 1000);

async function contaBancaria1() {
    let depositar = await perguntar('Qual valor você deseja depositar? ');
    usuario1.depositarSaldo(depositar);

    let sacar = await perguntar('Qual valor você deseja sacar? ');
    usuario1.sacarSaldo(sacar);

    usuario1.mostraSaldo();

    console.log(`O Sr ${usuario1.titular} depositou ${depositar}`);
    console.log(`O Sr ${usuario1.titular} sacou ${sacar}`);
    prompt.close();
}
contaBancaria1();