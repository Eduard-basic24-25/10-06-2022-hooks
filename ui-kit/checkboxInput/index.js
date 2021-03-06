import style from './index.module.css'

function CheckboxInput(props) {
  const isLabel = props.isLabel;
  const textLabel = props.textLabel;
  const inputId = props.inputId;
  const inputName = props.inputName;
  const disabled = props.disabled;

  return (
    <div className={style.checkboxInputContainer}>
      { isLabel && <label className={style.checkboxLabel} htmlFor={inputId}>{textLabel}</label> }
      <input 
        className={style.checkboxInput} 
        id={inputId} 
        name={inputName} 
        type="checkbox" 
        disabled={disabled} 
      />
    </div>
  );
}

export default CheckboxInput;