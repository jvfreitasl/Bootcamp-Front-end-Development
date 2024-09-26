import "./App.css";
import Mensagem from "./components/Mensagem/Mensagem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filmes from "./components/Filmes/Filmes";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button"

function App() {
  function handleClick() {
    alert("Olá");
  }
  function handleClickButton1(){
    alert("Clicou no botão 1")
  }

  return (
    <>
      <Header />
      <div className="container">
        <Mensagem cor="red">Tenha uma ótima semana.</Mensagem>
        <Filmes />
        <section className="contato">
          <h2>Gostou? Entre em contato conosco.</h2>
          <Form />
        </section>
        <section>
          <h2>Eventos</h2>
          <button onClick={handleClick}>Clique!</button>
          {/*Ao clicar o evento irá exibir.*/}
          {/* <button onMouseEnter={handleClick}>Clique!</button> - Ao entrar em contato o alerta é exibido */}
          <button
            onClick={function thisClick() {
              alert("Olá João");
            }}
          >
            Clique!
          </button>

          <Button text='Botao1' onClick={handleClickButton1}></Button>
          <Button text='BotaoTeste' onClick={'Testei'}></Button>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
