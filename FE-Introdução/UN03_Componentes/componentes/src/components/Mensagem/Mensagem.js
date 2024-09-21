import "./Mensagem.css";
function Mensagem({ cor, children }) {
  return (
    <div className="mensagem">
      <h2>Mensagem do dia:</h2>
      <p style={{ color: cor }}>{children}</p>
    </div>
  );
}

export default Mensagem;
