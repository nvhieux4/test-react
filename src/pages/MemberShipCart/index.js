import Input from "../../components/Input";
import MemberShipInfor from "../../components/MemberShipInfor";
import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import images from "../../assets/images";

function MemberShipCart() {
    const languages = useContext(LangContext);
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/membership-cart")
      }
    return ( 
    <div className="membershipDetail">
    <MemberShipInfor background/>
    <img src={images.logo_cart} alt="logo" style={{margin:"59px auto 51px"}}/>
    <div className="mt37-input">
    <Input info placeholder="card number"/>
    </div>
    <div className="mt30-input">
    <Input info placeholder="name on the card"/>
    </div>
    <div className="group-two-input">
        <Input info w168  placeholder="Expiry date"/>
        <Input info w119 placeholder="secret code"/>
    </div>
    <Button border mt42 onClick={handleClick}>PAY</Button>
</div> );
}

export default MemberShipCart ;