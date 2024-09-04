//Arrow Functions

//Função Tradicional

function soma(num1, num2) {
  return num1 + num2;
}

let somaArrow = (num1, num2) => {
  return num1 + num2;
};

let somaArrowS = (num1, num2) => num1 + num2; //conseguimos reduzir quando não há tratamento dentro da função e temos apenas um retorno.

let dobra = (num) => num * 2; //quando existe apenas um unico parametro, não há a necessidade de por parênteses.

let saudacao = () => console.log("Olá"); //existe a possibilidade de usar a ArrowFunction com parametro vazio, porém é necessário ter os parênteses vazios.

console.log(soma(2, 2));
console.log(somaArrow(2, 5));
console.log(somaArrowS(2, 6));
console.log(dobra(9));
saudacao();
