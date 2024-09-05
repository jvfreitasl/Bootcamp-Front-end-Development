let numeros = [1, 2, 3, 4, 5];
let nomes = ["Joao", "Maria", "Jose"];

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(numeros[0]);
console.log(nomes[1]);
console.log(matriz[1][1]);
numeros[3] = 10;

// adiciona um valor no final do array
numeros.push(6);
console.log(numeros);

// remove o ultimo valor do array
numeros.pop();
console.log(numeros);

// adiciona um valor no início do array
numeros.unshift(0);
console.log(numeros);

// remover o primeiro valor do array
numeros.shift(0);
console.log(numeros);
