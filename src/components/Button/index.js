
import "./button.scss"
function Button({
  onClick,
  children,
  border=false,
  mt42=false,
  membership=false
}) {

  return (
    <div className={`group-button ${mt42 ? "group-button--mt42":""}`}>
      <button className={`button ${border ? "button--border": ""} ${membership ? "button--membership": ""}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}


export default Button;
