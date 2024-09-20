function Saudacao({ nome = 'usuário', sobrenome }) { // usuário será meu nome default
  //props é a função de criar parâmentros para minha tag

  // const nome = props.nome;
  // const sobrenome = props.sobrenome;
  //ou
  // const {nome, sobrenome} = props;
  //ou
  // Defino diretamente na função

  return (
    (
      <h2>
        Olá, tudo bem?<br></br>
        {/* {props.nome}
        {props.sobrenome} */}
      </h2>
    ),
    (
      //Duas maneiras de solicitar meu parâmentro.
      <h2>
        Olá, tudo bem?<br></br>
        {nome} {sobrenome}
      </h2>
    )
  );
}

export default Saudacao;
