import "./Header.css";
import Saudacao from "../Saudacao/Saudacao";

const Header = () => {
  return (
    <header className="header">
      <h1>Meu Projeto.</h1>
      <Saudacao nome="João" sobrenome="Victor" />
    </header>
  );
};

export default Header;
