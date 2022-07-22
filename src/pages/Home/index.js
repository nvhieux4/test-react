import images from "../../assets/images";
import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./home.scss";


function Home() {
  const navigate = useNavigate();
  const languages = useContext(LangContext);
  const handleClick = () => {
    navigate("/info-step-1");
  };
  return (
    <div className="home">
      <img src={images.logo_white} alt="logo" className="home__logo" />
      <div className="home_text">
        <div className="fz-16 home_text__title">{languages.home_title}</div>
        <div className="fz-16 home_text__text">{languages.home_text}</div>
        <div className="fz-16 home_text__sub">{languages.home_text_sub}</div>
      </div>
        <Button onClick={handleClick}>{languages.home_button}</Button>
      
    </div>
  );
}

export default Home;
