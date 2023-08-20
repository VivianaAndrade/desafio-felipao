let nome = "Vivi";
let nome2 = "Pedro";
let xp = 1500;
let xp2 = 4000;

const niveisXP = {
    0: "Ferro",
    1000: "Bronze",
    2000: "Prata",
    5000: "Ouro",
    7000: "Platina"
};

//O trecho de código for (const nivelXP in niveisXP) é utilizado para percorrer as chaves (níveis de experiência) no objeto niveisXP. Em seguida, ele compara o valor atual de XP com cada nível e, se o valor de XP for menor do que o nível atual, ele atribui o nome do nível correspondente à variável xp (ou xp2 para o segundo personagem) e quebra o loop usando o comando break. Isso permite que você encontre o nível adequado para o valor de XP de cada personagem.

for (const nivelXP in niveisXP) {
    if (xp < nivelXP) {
        xp = niveisXP[nivelXP];
        break;
    }
}

for (const nivelXP in niveisXP) {
    if (xp2 < nivelXP) {
        xp2 = niveisXP[nivelXP];
        break;
    }
}

console.log("A Heroína de nome " + nome + " está no nível de " + xp);
console.log("O Herói de nome " + nome2 + " está no nível de " + xp2);

/*Dicas de otimização

Evite repetições desnecessárias:
Note que você estava verificando o valor de xp várias vezes dentro do mesmo intervalo de XP. No novo código, apenas verificamos uma vez para cada personagem, o que é mais eficiente.

Use nome consistente:
Você usou a palavra "Heroina" e "Herói" de maneira intercambiável. Use o mesmo termo para manter a consistência no código.

Comentários:
Se o código se tornar mais complexo, é sempre uma boa ideia adicionar comentários para explicar o que cada parte do código está fazendo.

Indentação e formatação:
Manter uma indentação consistente torna o código mais legível. Certifique-se de formatar o código de maneira uniforme para facilitar a leitura e manutenção.*/