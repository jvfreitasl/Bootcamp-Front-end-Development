import "./App.css";
import Mensagem from "./components/Mensagem/Mensagem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filmes from "./components/Filmes/Filmes";
import Form from "./components/Form/Form";
function App() {
  
  function handleClick(){
    alert('Olá')
  }

  return (
    <>
      <Header />
      <div className="container">
        <Mensagem cor="red">Tenha uma ótima semana.</Mensagem>
        <Filmes/>
        <section className='contato'>
          <h2>Gostou? Entre em contato conosco.</h2>
          <Form/>
        </section>
        <section>
          <h2>Eventos</h2>
          <button onMouseClick={handleClick}>Clique!</button> {/*Ao clicar o evento irá exibir.*/}
          {/* <button onMouseEnter={handleClick}>Clique!</button> - Ao entrar em contato o alerta é exibido */ }
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
