import images from "../../assets/images";
import "./home.scss";
import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const languages = useContext(LangContext);
  const handleClick = () => {
    navigate("/info");
  };
  return (
    <div className="home">
      <img src={images.logo_white} alt="logo" className="home__logo" />
      <div className="home_text">
        <span className="home_text__title">{languages.home_title}</span>
        <span className="home_text__text">{languages.home_text}</span>
        <span className="home_text__sub">{languages.home_text_sub}</span>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button className="button" onClick={handleClick}>
          {languages.home_button}
        </button>
      </div>
    </div>
  );
}

export default Home;
