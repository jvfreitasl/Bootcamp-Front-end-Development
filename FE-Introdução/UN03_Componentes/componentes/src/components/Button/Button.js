import './Button.css'

const Button = ({text, ...props}) =>{
  return(
    <button className='button-form' type={props.type}>{text}</button>
  )
}

export default Button;