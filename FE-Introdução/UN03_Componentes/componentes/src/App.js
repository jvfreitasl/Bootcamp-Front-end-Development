import "./App.css";
import Mensagem from "./components/Mensagem/Mensagem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filmes from "./components/Filmes/Filmes";
import Form from "./components/Form/Form";
function App() {
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
      </div>
      <Footer />
    </>
  );
}

export default App;
