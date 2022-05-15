import './Input.css';


const Input = ({label,...rest}) => (
  <div className="field">
    <label/>{label}
    <input {...rest}/>
  </div>
);

export default Input;
