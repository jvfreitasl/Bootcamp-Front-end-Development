function Mensagem({cor, children}) {
  return (
    <div>
      <p style={{ color: cor }}>{children}</p>
    </div>
  );
}

export default Mensagem;
