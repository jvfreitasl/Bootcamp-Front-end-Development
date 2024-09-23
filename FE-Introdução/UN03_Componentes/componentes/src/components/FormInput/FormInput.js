const FormInput = ({inputName, ...props}) => {
  //...props irá requisitar/trazer todas minhas propriedades do input
  return(
    <div className='form-input'>
          <label htmlFor={props.id}>{inputName}:</label>
          <input type={props.type}></input>
        </div>
  )
}

export default FormInput;