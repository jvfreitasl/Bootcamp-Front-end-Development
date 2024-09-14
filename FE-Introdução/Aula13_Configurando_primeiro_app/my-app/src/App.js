import logo from "./logo.svg";
import "./App.css";

function App() {
  const nome = "Joaquim";
  const idade = 18;
  const Saudacao = () => "Olá Mundo.";

  const pessoas = [
    {
      nome: "João",
      profissao: "Dev",
    },
    {
      nome: "Ivo",
      profissao: "Professor",
    },
    {
      nome: "Maria",
      profissao: "Doutora",
    },
  ];
  return (
    //JSX - JavaScript XML
    <div>
      <h1 className="titulo">Olá meu nome é Joao</h1>
      <h2>Olá e o meu nome é {nome}</h2>
      <p>Você é maior de idade? {idade >= 18 ? "Sim" : "Não"}</p>
      <p>
        {" "}
        <Saudacao />{" "}
      </p>
      <ul>
        {pessoas.map((pessoas) => (
          <li>
            {pessoas.nome} - {pessoas.profissao}
          </li>
        ))}
      </ul>
    </div>
  );
}

// function App() {
//   return (
//     //JSX - JavaScript XML
//     <div className="App">
//       <header className="App-header">
//         <h1>Meu primeiro App React</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
