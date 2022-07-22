import Button from "../../components/Button";
import ItemMemberShip from "../../components/ItemMemberShip";
import { useContext } from "react";
import { LangContext } from "../../utils/LangProvider";
import { useNavigate } from "react-router-dom";

function ListMembership() {
    const languages = useContext(LangContext);
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/membership-detail")
      }
    return ( <div className="mt-49 d-flex flex-column align-items-center">
        <ItemMemberShip/>
        <ItemMemberShip yellow/>
        <ItemMemberShip grey/>
        <Button border onClick={handleClick}>{languages.membership_list_button}</Button>
    </div> );
}

export default ListMembership;