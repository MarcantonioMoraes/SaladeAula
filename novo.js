const readline = require('readline');
const notas = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
inputNotas();

//Início do input de solicitação das 4 notas dos trimestres do último ano.
function inputNotas() {
    notas.question('Digite a nota do primeiro trimestre: ', (nota1) => {
    notas.question('Digite a nota do segundo trimestre: ', (nota2) => {
        notas.question('Digite a nota do terceiro trimestre: ', (nota3) => {
            notas.question('Digite a nota do quarto trimestre: ', (nota4) => {

                    //Conversão das notas fornecidas para números.
                    const n1 = parseFloat(nota1);
                    const n2 = parseFloat(nota2);
                    const n3 = parseFloat(nota3);
                    const n4 = parseFloat(nota4);

                    //Validação que verifica se as notas foram escritas como strings e se elas foram digitadas em valores de 0 a 10.
                    if (n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10 || n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 || isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
                        console.log();
                        console.log('=== Notas digitadas de maneira inválida! O sistema não aceitará textos e as notas precisam ser números entre 0 e 10! ===')
                        console.log('=== Digite suas notas novamente: ===');
                        console.log();
                        inputNotas();
                    } else {
                        
                        //Cálculo de média da nota.
                        const media = (n1 + n2 + n3 + n4) / 4;

                        //Verificação de condicional, para saber se o aluno está aprovado ou reprovado.
                        if (media >= 7){
                    console.log();
                    console.log(`=== Nota média do ano: ${media} ===`);
                    console.log('=== Situação: Aprovado. ===');
                    notas.close();
                } else {
                    console.log();
                    console.log(`=== Nota média do ano: ${media} ===`);
                    console.log('=== Situação: Reprovado. ===');
                    notas.close();
                   }
                }
            });
        });
    });
});
};

notas.on('close', () => {
  console.log();
  console.log('Finalizando aplicação, obrigado!');
  process.exit(0);
});