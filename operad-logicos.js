//Neste programa, o usuário insere o número de notas que deseja informar. Em seguida, ele insere cada nota individualmente, e o programa calcula a média dessas notas. Dependendo da média calculada, o programa exibirá uma mensagem indicando se o aluno foi aprovado ou reprovado.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quantas notas você deseja inserir? ", function(numNotas) {
    numNotas = parseInt(numNotas);

    let somaNotas = 0;

    for (let i = 1; i <= numNotas; i++) {
        rl.question(`Insira a nota ${i}: `, function(nota) {
            nota = parseFloat(nota);
            somaNotas += nota;

            if (i === numNotas) {
                const media = somaNotas / numNotas;
                console.log(`A média das notas é: ${media.toFixed(2)}`);

                if (media >= 7) {
                    console.log("Parabéns! Você foi aprovado.");
                } else {
                    console.log("Infelizmente, você foi reprovado.");
                }

                rl.close();
            }
        });
    }
});






