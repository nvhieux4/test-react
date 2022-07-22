import images from "../../assets/images";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";
import { useNavigate } from "react-router-dom";

function InfoStep2() {
    const languages = useContext(LangContext);
    const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/membership")
  }
    return ( 
    <div className="info">
        <img src={images.logo_blue} alt="logo-white" className="info__logo" />
        <Input type="number" code placeholder={languages.placeholder_code} />
        <Button border mt42 onClick={handleClick}>{languages.info_button_2}</Button>
    </div> 
  );
}

export default InfoStep2;