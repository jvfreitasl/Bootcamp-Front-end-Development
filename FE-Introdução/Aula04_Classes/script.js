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

class Aluno extends pessoa {
  constructor(nome, idade, anoEscolar) {
    super(nome, idade);
    this.anoEscolar = anoEscolar;
  }
  saudacao() {
    console.log(
      `Olá, me chamo ${this.nome} e tenho ${this.idade} anos. Estou no ${this.anoEscolar}`
    );
  }
}

const aluno = new Aluno("Carlos", 8, "3° ano");
aluno.saudacao();
