function DetailMemberShipInfo({onClose}) {
    return ( 
    <div className="detailMemberShipInfo" onClick={onClose}>
        <p className="detailMemberShipInfo__name">Golden Membership</p>
        <p className="detailMemberShipInfo__sub">Adel Saeed Alqahtani</p>
        <p className="detailMemberShipInfo__memberShip">1119989899</p>
        <div className="detailMemberShipInfo__group">
            <p>Expire date</p>
            <p>01/01/2023</p>
        </div>
    </div>
     );
}

export default DetailMemberShipInfo;