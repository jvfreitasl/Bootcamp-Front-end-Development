// conceito em Objetos
const objeto = { nome: "João", idade: 28 };
const novoObjeto = { ...objeto }; // clonando objeto

console.log(novoObjeto);

const objeto1 = { nome: "Ana", idade: 25 };
const objeto2 = { cidade: "Santos", país: "Brasil" };
const resultado = { ...objeto1, ...objeto2 }; // somando objetos

console.log(resultado);

const objeto3 = { ...objeto1, profissao: "Programador" }; // clonando e adicionando elemento a um objeto
console.log(objeto3);

// conceito em Listas

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const resultadoNew = [...array1, ...array2];
console.log(resultadoNew);
