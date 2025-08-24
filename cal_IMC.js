// Abaixo do peso: IMC menor que 18,5 kg/m².
// Peso normal: IMC entre 18,5 e 24,9 kg/m².
// Sobrepeso: IMC entre 25 e 29,9 kg/m².
// Obesidade: IMC igual ou maior que 30 kg/m².
// IMC = Peso (kg) / (Altura (m) x Altura (m)).

const readline = require('readline');
const prompt = readline.createInterface({
    input: process.stdin, output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        prompt.question(pergunta, (resposta) => {
            // Troca vírgula por ponto antes de converter para número
            const valor = Number(resposta.replace(',', '.'));
            resolve(valor);
        });
    });
}

function calcularIMC(peso, altura) {
    return (peso / (altura * altura));
}

async function IMC() {
    let peso = await perguntar('Digite seu peso em kg: ');
    let altura = await perguntar('Digite sua altura em metros: ');

    while (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Por favor, insira valores numéricos válidos e maiores que zero.");
        peso = await perguntar('Digite seu peso em kg: ');
        altura = await perguntar('Digite sua altura em metros: ');
    }

    const imc = calcularIMC(peso, altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 25) {
        console.log("Peso normal");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
    prompt.close(); 
}
IMC();