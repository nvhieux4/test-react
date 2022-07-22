import images from "../../assets/images";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <img src={images.phone} alt="phone" className="header__phone" />
      <img src={images.bell} alt="bell" className="header__bell" />
    </div>
  );
}

export default Header;
