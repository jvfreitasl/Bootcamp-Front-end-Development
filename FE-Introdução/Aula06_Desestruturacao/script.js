const arr = ["Joao", "Jose", "Maria"]; //construindo o array

const [a, b, c] = arr; //desmontando o array

console.log(a, b, c);

const obj = {
  nomes: "Joao",
  idades: 32,
};

const { nomes, idades } = obj; // a destruturação também funciona com objetos
const { nomes: nomeNew, idades: idadeNew } = obj; // Há como renomear a variável
console.log(nomeNew, idadeNew);

const pessoa = { nome: "Maria" };
const { nome, idade = 18 } = pessoa;
console.log(nome, idade);

function calcularIdade({ anoAtual, anoNascimento }) {
  // ao declarar os parametros com { } , indica que os elementos atuam como objetos
  return anoAtual - anoNascimento;
}

const pessoa2 = {
  anoNascimento: 1996,
  anoAtual: 2024,
};

// console.log(calcularIdade(2024, 1996));
console.log(calcularIdade(pessoa2));
