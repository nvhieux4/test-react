import images from "../../assets/images";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";

function InfoStep1() {
  const languages = useContext(LangContext);
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/info-step-2")
  }
  return (
  <div className="info">
    <img src={images.logo_blue} alt="logo-white" className="info__logo" />
    <Input type="number" phone />
    <Button border mt42 onClick={handleClick}>{languages.info_button_1}</Button>
  </div>)
}

export default InfoStep1;
