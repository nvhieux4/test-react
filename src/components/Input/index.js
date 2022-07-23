import "./input.scss";
import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";

function Input({type="text" ,phone=false,code=false, placeholder="" ,info,w186=false,w119=false}) {
    const languages = useContext(LangContext);
    return ( 
    <div className="group-input">
        {phone && <input type={type} inputMode="tel" className="input input--sub-phone"/>}
        <input type={type} 
        className={`input ${phone ? "input--phone" : ""} ${code ? "input--code" :""} ${w186 ? "input--w186" :""} ${w119 ? "input--w119" :""} ${info ? "input--info" :""} ${languages.laylout === "rtl" ? "rtl" : ""}`}
        placeholder={placeholder}
          />
    </div> );
}

export default Input;