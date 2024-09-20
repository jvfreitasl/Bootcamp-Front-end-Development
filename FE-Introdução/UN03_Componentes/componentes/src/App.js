import "./App.css";
import Saudacao from "./components/Saudacao/Saudacao";
import Mensagem from "./components/Mensagem/Mensagem";

function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
      <Saudacao nome="João" sobrenome="Victor" />
      <Saudacao />
      <Mensagem>Tenha um ótimo dia.</Mensagem>
      <Mensagem cor="red">E uma ótima semana.</Mensagem>
    </div>
  );
}

export default App;
