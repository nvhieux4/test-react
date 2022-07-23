import Button from "../../components/Button";
import images from "../../assets/images";
import "./membershipInfomation.scss"
import Modal from "../../components/Modal";
import DetailMemberShipInfo from "./DetailMemberShipInfo"
import { useRef } from "react";

function MemberShipInfomation() {
    const modalRef = useRef(null)

    return ( 
        <>
            <Modal ref={modalRef}>
                <DetailMemberShipInfo onClose={() => modalRef.current.hideModal()}/>
            </Modal>
            <div className="memberShipInfomation" onClick={() => modalRef.current.showModal()}>
            <div className="box-infomation">
                <p className="box-infomation__title">Golden Membership</p>
                <p className="box-infomation__sub">Golden Membership</p>

                <p className="box-infomation__action">Click here to view membership information</p>
            </div>
            <Button border>
                <div className="group__text pdlr11px">
                    <img src={images.add} alt="add" />
                    <span className="text-button">Add membership for a family member</span>
                </div>
            </Button>
            <img src={images.footer} alt="footer" className="memberShipInfomation__footer"/>
            </div> 
        </>
    );
}

export default MemberShipInfomation;