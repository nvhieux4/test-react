import images from "../../assets/images";
import "./header.scss";
import { useTranslation } from "react-i18next";

function Header() {
 
  const { i18n } = useTranslation();

  const handleChange = (e)=>{
    console.log(e)
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div className="header">
      <div className="header__user">
        <img src={images.user} alt="user" className="header__user__img"/>
        <span className="fz-16 header__user__text">adel saeed</span>
      </div>
      <div className="header__action">
        <select onChange={handleChange} value={i18n.language} >
          <option value="en">EN</option>
          <option value="ind">India</option>
        </select>
        <div className="header__action__border">
        <img src={images.phone} alt="phone" />
        </div>
        <div className="header__action__noti">
          <img src={images.bell} alt="bell" className="header__action__noti__bell" />
          <span className="header__action__noti--active"><img src={images.noti} alt="noti"  /></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
