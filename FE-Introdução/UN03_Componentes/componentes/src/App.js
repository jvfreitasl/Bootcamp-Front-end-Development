import "./App.css";
import Mensagem from "./components/Mensagem/Mensagem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Mensagem cor="red">Tenha uma ótima semana.</Mensagem>
      </div>
      <Footer />
    </>
  );
}

export default App;
