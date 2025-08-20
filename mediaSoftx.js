const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function nota(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(Number(resposta));
    });
  });
}

async function fim() {
  const primeiraNota = await nota('Informe a nota do Primeiro trimestre: ');
  const segundaNota = await nota('Informe a nota do Segundo trimestre: ');
  const terceiraNota = await nota('Informe a nota do Terceiro trimestre: ');
  const quartaNota = await nota('Informe a nota do Quarto trimestre: ');
  const media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

  if ([primeiraNota, segundaNota, terceiraNota, quartaNota].some(n => isNaN(n))) {
    console.log("Um dos campos não foi preenchido corretamente! Tente de novo!");
    console.log("Preencha com números (ex: 1, 2, 3, etc.), não por extenso (ex: um, dois, três, etc.)");
    console.log("Preencha com números entre 0 e 10.");
    return fim();
  } else if ([primeiraNota, segundaNota, terceiraNota, quartaNota].some(n => n > 10)) {
    console.log("Preencha com números entre 0 e 10.");
    return fim();
  } else if ([primeiraNota, segundaNota, terceiraNota, quartaNota].some(n => n < 0)) {
    console.log("O valor deve ser maior ou igual a zero.");
    return fim();
  } else if (media <= 6) {
    console.log(`Sua nota foi de ${media.toFixed(2)} e você foi REPROVADO!`);
    rl.close();
  } else if (media <= 8) {
    console.log(`Sua nota foi de ${media.toFixed(2)} e você passou na MÉDIA!`);
    rl.close();
  } else {
    console.log(`Sua nota foi de ${media.toFixed(2)} e você foi APROVADO!`);
    rl.close();
  }
}

fim();