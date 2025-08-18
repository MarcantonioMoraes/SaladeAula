const rl = require ("node:readline")
const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

prompt.question ("Qual a sua nota: ", escreva1 =>{
    prompt.question ("Qual a sua Segunda nota: ", escreva2 =>{
        prompt.question("Qual a sua terceira nota: ", escreva3 =>{
            const nota1 = Number.parseInt(escreva1)
            const nota2 = Number.parseInt(escreva2)
            const nota3 = Number.parseInt(escreva3)
            const media = (nota1 + nota2 + nota3) / 3
            if (Number.isNaN(nota1 && nota2 && nota3)){
                console.log("Um dos capos não foi preenchido corretamente! Tente de novo!")
                console.log("Preencha com os números (ex: 1, 2, 3, etc.), não por extenso (ex: um, dois, três, etc.)")
                console.log("Preencha com numeros entra 0 e 10")
            }else if(nota1 > 10 || nota2 > 10 || nota3 > 10){
                console.log("Preencha com numeros entra 0 e 10")
            }  else if(nota1 < 0 || nota2 < 0 || nota3 < 0){
                console.log("O valor deve ser maior ou igual a zero.")
            }else if (media <= 6){
                console.log (`Sua nota é ${media.toFixed(2)}  e você foi REPROVADO!`);
            }else if (media <= 8){
                console.log(`Sua nota foi ${media.toFixed(2)} e voçê passou na MÉDIA!`)
            }else {
                console.log(`Sua nota é ${media.toFixed(2)} e você foi APROVADO!`)
            }
            prompt.close()
            
        });
    });
});