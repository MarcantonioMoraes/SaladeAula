const readline = require (`readline`);
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

async function perguntaIdade(){
    const idade = await nota (`Qual sua idade? `);

    for (let i =1; i <= idade; i++){
        console.log(`sua idade é: ${i}`);
    }
    rl.close();
}
perguntaIdade();