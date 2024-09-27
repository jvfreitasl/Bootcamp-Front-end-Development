import { useState } from "react";
import Filme from "../Filme/Filme.js";
import "./Filmes.css";
import FormInput from "../FormInput/FormInput.js";
import Button from "../Button/Button.js";
const Filmes = () => {
  const [filmes, setFilmes] = useState([
    {
      nome: "HellBoy",
      poster:
        "https://www.claquete.com.br/fotos/filmes/poster/15442_grande.jpg",
      anoLancamento: "2010",
    },
    {
      nome: "Interestelar",
      poster:
        "https://uauposters.com.br/media/catalog/product/4/1/411320150509-uau-posters-filmes-interestelar-interestellar.jpg",
      anoLancamento: "2014",
    },
    {
      nome: "Titanic",
      poster:
        "https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/1/9/198920140605-198920140605-uau-posters-filmes-titanic--titanic-2.jpg",
      anoLancamento: "2005",
    },
    {
      nome: "Meu Malvado Favorito",
      poster:
        "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/89/83/20028679.jpg",
      anoLancamento: "2020",
    },
  ]);

  const [filmesForm, setFilmesForm] = useState({
    nome: "",
    poster: "",
    anoLancamento: "",
  });

  const handleClick = () => {
    setFilmes([...filmes, filmesForm])
    setFilmesForm({
      nome: "",
      poster: "",
      anoLancamento: "",
    })
  };

  const handleFiledsChange = (event) => {
    setFilmesForm({
      ...filmesForm,
      [event.target.name]: event.target.value
    })
    console.log(filmesForm);
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
          inputName="Poster"
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
