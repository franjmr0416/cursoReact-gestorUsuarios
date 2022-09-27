import "./Input.css";
//toma solo el param label y con el spread operator asigna
//los demas params a input
const Input = ({ label, ...rest }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};
export default Input;
