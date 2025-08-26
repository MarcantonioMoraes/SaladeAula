const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function cobrança() {
    let date = new Date();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    if (hora >= 0 && hora < 5) {
        console.log(`Boa Madrugada, são ${hora} horas e ${minutos} minutos ${segundos} segundos`);
    } else if (hora >= 5 && hora < 12) {
        console.log(`Bom Dia, são ${hora} horas e ${minutos} minutos ${segundos} segundos`);
    } else if (hora >= 12 && hora < 18) {
        console.log(`Boa Tarde, são ${hora} horas e ${minutos} minutos ${segundos} segundos`);
    } else {
        console.log(`Boa Noite, são ${hora} horas e ${minutos} minutos ${segundos} segundos`);
    }

    const nome = await perguntar("Qual o seu nome?: ");
    console.log(`Bem Vindo ao Estacionamento Marcos Park Sr(a) ${nome}`);
    console.log(`Aqui cobramos o valor de R$ 5,00 a hora`);
    let horas = await perguntar("Quantas horas você ficou estacionado?: ");
    let valor = Number(horas) * 5;

    while (isNaN(valor) || valor < 0) {
        console.log("Valor inválido");
        horas = await perguntar("Quantas horas você ficou estacionado?: ");
        valor = Number(horas) * 5;
    }

    console.log(`O valor total a ser pago é R$ ${valor},00`);
    console.log(`Obrigado por utilizar nossos serviços, Sr(a) ${nome}`);
    console.log(`Volte Sempre!`);
    console.log(`Sistema encerrado ás ${hora} horas e ${minutos} minutos ${segundos} segundos`);
    rl.close();
}
cobrança();