import "./memberShipInfor.scss"

function MemberShipInfor({background=false}) {
    return (  
    <div className={`membership-info ${background ? "membership-info--background" : ""} `}>
    <div className="membership-info__text">
        <span className="membership-box__info__name">Platinum Membership</span>
        <div className="membership-info__info">
            <span className="membership-info__info__name">price includes tax</span>
            <span className="membership-info__info__sar">89</span>
        </div>
        <p className="membership-info__text__sub">Examination of the clinic at a discounted price of 80 riyals</p>
        <p className="membership-info__text__sub">30% discount on dental services</p>
        <p className="membership-box__info__name fw400">Valid for one year</p>
    </div>
</div> )
}

export default MemberShipInfor;