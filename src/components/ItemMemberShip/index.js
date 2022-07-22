import "./itemMembership.scss"
import images from "../../assets/images";
function ItemMemberShip({grey, yellow}) {
    return ( 
    <div className={`membership-box ${yellow ? "membership-box--yellow":""} ${grey ? "membership-box--grey":""}`}>
            <img src={images.membership} alt="membership" className="membership-box__img" />
            <div className="membership-box__text">
                <div className="membership-box__info">
                    <span className="membership-box__info__name">Platinum Membership</span>
                    <span className="membership-box__info__sar">89 SAR</span>
                </div>
                <p className="membership-box__text__sub">Valid for one year</p>
                <p className="membership-box__text__sub">Examination of the clinic at a discounted price of 80 riyals</p>
                <p className="membership-box__text__sub">30% discount on dental services</p>
            </div>
    </div> );
}

export default ItemMemberShip;