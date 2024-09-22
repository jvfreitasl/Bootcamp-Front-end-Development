import './Filme.css'
const Filme = ({filme}) => {
  return (
    <li className="filme-item">
      <img src={filme.poster} alt={filme.nome} />
      <h4>{filme.nome}</h4>
      <p>{filme.anoLancamento}</p>
    </li>
  );
};

export default Filme;