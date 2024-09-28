import { useEffect, useState } from "react";
import Filme from "../Filme/Filme.js";
import "./Filmes.css";
import FormInput from "../FormInput/FormInput.js";
import Button from "../Button/Button.js";
const Filmes = () => {
  const [filmes, setFilmes] = useState([]);

  //useEffect controla o ciclo de vida da aplicação, primeiro parâmetro é uma função no qual deseja que ele execute. (fará isso após a construção do componente)
  //O segundo parâmentro é para caso haja alguma mudança na aplicação, é uma variável de estado, seja qual for a mudança, ele irá chamar novamente a função.
  useEffect(() => {
    getMovies();
  }, []);

  const [filmesForm, setFilmesForm] = useState({
    nome: "",
    poster: "",
    anoLancamento: "",
  });

  const handleClick = async () => {
    const response = await fetch("http://localhost:3005/movies", {
      method: "POST",
      header: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(filmesForm),
    });

    const data = await response.json();
    alert(`Filme ${data.nome} Cadastrado com sucesso!`);

    getMovies();

    setFilmesForm({
      nome: "",
      poster: "",
      anoLancamento: "",
    });
  };

  const handleFiledsChange = (event) => {
    setFilmesForm({
      ...filmesForm,
      [event.target.name]: event.target.value,
    });
    console.log(filmesForm);
  };

  const getMovies = async () => {
    //GET - Buscar as informações dos filmes
    // response - a resposta do servidor (confirmação que houve uma comunicação)
    // data - são os dados que recebemos, que estão contidos no response
    const response = await fetch("http://localhost:3005/movies");
    const data = await response.json();
    setFilmes(data);
  };

  return (
    <section className="filmes">
      <h2>Meus Filmes Favoritos</h2>
      <form className="form">
        <FormInput
          inputName="Nome"
          id="nome"
          name="nome"
          type="text"
          value={filmesForm.nome}
          onChange={(event) => handleFiledsChange(event)}
        />
        <FormInput
          inputName="Poster(URL) "
          id="poster"
          name="poster"
          type="text"
          value={filmesForm.poster}
          onChange={(event) => handleFiledsChange(event)}
        />
        <FormInput
          inputName="Ano de Lancamento"
          id="anoLancamento"
          name="anoLancamento"
          type="text"
          value={filmesForm.anoLancamento}
          onChange={(event) => handleFiledsChange(event)}
        />
        <Button text="Cadastrar" type="submit" onClick={handleClick} />
      </form>
      <ul className="filmes-lista">
        {/* Irei mapear meu array, para cada filme encontrado irei fazer o seguinte: */}
        {filmes.map((filme, index) => (
          // Uma forma de filtrar quais os filmes quero que apareça é:
          // {filmes.filter((filme) => filme.anoLancamento >= 2015).map((filme) =>  ..... )}
          // neste caso filtrei os filmes que foram lançados no ano de 2015 em diante.
          <Filme filme={filme} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Filmes;
