const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function data_hora (pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

async function menu() {
  while (true) {
    console.log("Escolha uma opção:");
    console.log("1 - Mostrar data");
    console.log("2 - Mostrar hora");
    console.log("n - Sair");
    const opcao = await data_hora("Digite sua opção: ");

    switch(opcao) {
      case "1": {
        const date = new Date();
        const dia = date.getDate();
        const mes = date.getMonth() + 1;
        const ano = date.getFullYear();
        console.log(`Hoje é ${dia}/${mes}/${ano}`);
        break;
      }
      case "2": {
        const date = new Date();
        const hora = date.getHours();
        const minutos = date.getMinutes();
        console.log(`Agora são ${hora} horas e ${minutos} minutos`);
        break;
      }
      case "n": {
        console.log("Saindo...");
        rl.close();
        return;
      }
      default: {
        console.log(`${opcao} não é uma opção válida!`);
      }
    }
    
    const continuar = await data_hora("Deseja continuar? (s/n): ");
    if (continuar.toLowerCase() === "n") {
      console.log("Saindo...");
      rl.close();
      return;
    } else if (continuar.toLowerCase() === "s") {
      console.log("Continuando...");
    } else {
      console.log("Opção inválida! Voltando ao menu...");
    }
  }
}

menu();
