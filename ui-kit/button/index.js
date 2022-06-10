import style from './index.module.css'


function SubmitButton(props) {
  const textButton = props.textButton;
  const inputId = props.inputId;
  const buttonType = props.buttonType;
  
  return (
    <button 
        className={style.submitBtn} 
        type={buttonType}>
             {textButton}
    </button>
  );
}


export default SubmitButton;