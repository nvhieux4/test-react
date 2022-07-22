import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import images from "../../assets/images";
import "./membership.scss"

function Membership() {
    const languages = useContext(LangContext);
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/list-membership")
    }

    return ( 
    <>
    <div className="box-membership">
        <span className="box-membership__text">{languages.membership_text_1}</span>
        <span className="box-membership__text">{languages.membership_text_2}</span>
    </div>
    <Button border mt42 membership onClick={handleClick}>
        <div className="group__text">
            <img src={images.add} alt="add" />
            <span>{languages.membership_button}</span>
        </div>
    </Button>
    </> 
    );
}

export default Membership;