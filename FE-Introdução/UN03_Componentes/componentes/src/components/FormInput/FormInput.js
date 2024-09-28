import "./FormInput.css";

const FormInput = ({ inputName, onChange, ...props }) => {
  //...props irá requisitar/trazer todas minhas propriedades do input
  return (
    <div className="form-input">
      <label htmlFor={props.id}>{inputName}:</label>
      <input type={props.type} onChange={onChange} {...props}></input>
    </div>
  );
};

export default FormInput;
