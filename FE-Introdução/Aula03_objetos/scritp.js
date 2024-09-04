const carro = {
  marca: "Fiat",
  modelo: "Uno",
  cor: "Branco",
};

console.log(carro.marca);
console.log(carro["cor"]); //dois modos de acessar um conteúdo no objeto.

const pessoa = {
  nome: "Maria",
  sobrenome: "Santos",
  fullNAme: function () {
    return this.nome + " " + this.sobrenome;
  },
};

console.log(pessoa.fullNAme());

const pessoa2 = new Object;
pessoa2.nome = 'Ivo'
pessoa2.sobrenome = 'Soares'

console.log(pessoa2.nome + ' ' + pessoa2.sobrenome)