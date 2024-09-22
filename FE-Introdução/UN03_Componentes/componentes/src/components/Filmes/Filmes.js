import Filme from '../Filme/Filme.js'
import './Filmes.css'
const Filmes = () => {
  const filmes = [
    {
      nome: 'HellBoy',
      poster: 'https://www.claquete.com.br/fotos/filmes/poster/15442_grande.jpg',
      anoLancamento: '2010'
    },
    {
      nome: 'Interestelar',
      poster: 'https://uauposters.com.br/media/catalog/product/4/1/411320150509-uau-posters-filmes-interestelar-interestellar.jpg',
      anoLancamento: '2014'
    },
    {
      nome: 'Titanic',
      poster: 'https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/1/9/198920140605-198920140605-uau-posters-filmes-titanic--titanic-2.jpg',
      anoLancamento: '2005'
    },
    {
      nome: 'Meu Malvado Favorito',
      poster: 'https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/89/83/20028679.jpg',
      anoLancamento: '2020'
    }
  ]
  return (
    <section className="filmes">
      <h2>Meus Filmes Favoritos</h2>
      <ul className='filmes-lista'>
        {/* Irei mapear meu array, para cada filme encontrado irei fazer o seguinte: */}
        {filmes.map((filme, index) => (
          // Uma forma de filtrar quais os filmes quero que apareça é:
          // {filmes.filter((filme) => filme.anoLancamento >= 2015).map((filme) =>  ..... )}
          // neste caso filtrei os filmes que foram lançados no ano de 2015 em diante.
          <Filme filme={filme} key={index}/>
        ))}
      </ul>
    </section>
  );
};

export default Filmes;
