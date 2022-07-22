import "./input.scss";

function Input({type="text" ,phone=false,code=false, placeholder="" ,info,w168,w119}) {
    return ( 
    <div className="group-input">
        {phone && <input type={type} inputMode="tel" className="input input--sub-phone"/>}
        <input type={type} className={`input ${phone ? "input--phone" : ""} ${code ? "input--code" :""} ${w168 ? "input--w168" :""} ${w119 ? "input--w119" :""} ${info ? "input--info" :""}`} placeholder={placeholder}/>
    </div> );
}

export default Input;