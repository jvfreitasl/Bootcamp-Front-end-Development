class pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  saudacao() {
    console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos`);
  }
}

const pessoa1 = new pessoa("Maria", 25);
pessoa1.saudacao();
