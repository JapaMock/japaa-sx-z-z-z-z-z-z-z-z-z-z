// 4. Criação do array com as 5 notas
let notas = [6, 8, 7, 9, 10];

// 5. Inicialização da variável soma
let soma = 0;

// 6. Laço for...of para somar as notas do array
for (let nota of notas) {
    soma += nota; // O mesmo que: soma = soma + nota;
}

// 7. Cálculo da média
let media = soma / notas.length;

// 8. Criação do contador para notas maiores que 7
let acimaDeSete = 0;

// Laço para verificar quais notas são maiores que 7
for (let nota of notas) {
    if (nota > 7) {
        acimaDeSete++; // Incrementa 1 ao contador
    }
}

// 9. Exibição dos resultados no console
console.log("A média das notas é: " + media);
console.log("Quantidade de notas acima de 7: " + acimaDeSete);
