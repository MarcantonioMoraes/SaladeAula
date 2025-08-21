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
//     const idade = await nota (`Qual sua idade? `);

//     for (let i =1; i <= idade; i++){
//         console.log(`sua idade é: ${i}`);
//     }
//     rl.close();
// }

//     let idade = await nota (`Qual sua idade? `);

//     do {
//         console.log (`Sua idade: ${idade}`)
//         ++idade;

//     }while (idade <= 10){
//         console.log (`Sua idade final é: ${idade}`)
//     }
//     rl.close();
    // const frutas = ["Maçã", "Banana", "Uva"];

    // for (let fruta of frutas) {
    //     console.log(`Fruta: ${fruta}`);
    // }
    let pessoa = {
        nome: "Marcos",
        idade: 35,
        cidade: "Recife",
    }

    for (let chave in pessoa) {
        console.log(`${chave} + ${pessoa[chave]}`);
    }
    rl.close();

}
perguntaIdade();