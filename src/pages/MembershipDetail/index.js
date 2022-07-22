import Input from "../../components/Input";
import MemberShipInfor from "../../components/MemberShipInfor";
import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./index.scss"

function MembershipDetail() {
    const languages = useContext(LangContext);
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/membership-cart")
      }
    return ( 
    <div className="membershipDetail">
        <MemberShipInfor/>
        <div className="mt37-input">
        <Input info placeholder={languages.NationalIdentity}/>
        </div>
        <div className="mt30-input">
        <Input info placeholder={languages.FullName}/>
        </div>
        <div className="mt30-input">
        <Input info  placeholder={languages.DateofBirth}/>
        </div>
        <Button border mt42 onClick={handleClick}>{languages.MADA}</Button>
        <Button border>{languages.APPLEPAY}</Button>
    </div> );
}

export default MembershipDetail;