import "./Button.css";

const Button = ({ text, onClick, ...props }) => {
  return (
    <main>
      {/* <div>
        <button
          className="button-form"
          type={props.type}
          onClick={() => {
            alert(onClick);
          }}
        >
          {text}
        </button>
      </div> */}
      <div>
        <button className='button-form' type={props.type} onClick={(event) => 
          {event.preventDefault(); 
            // retira os eventos padroes do submit.
          onClick()}}>{text}</button>
      </div>
    </main>
  );
};

export default Button;
