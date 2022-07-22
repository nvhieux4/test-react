import InfoStep1 from "../pages/InfoStep1";
import InfoStep2 from "../pages/InfoStep2";
import Membership from "../pages/Membership";
import ListMembership from "../pages/ListMemberShip";
import MembershipDetail from "../pages/MembershipDetail";
import MemberShipCart from "../pages/MemberShipCart"

const ListRouter = [
  {
    path: "/info-step-1",
    component: InfoStep1,
  },
  {
    path: "/info-step-2",
    component: InfoStep2,
  },
  {
    path: "/membership",
    component: Membership,
  },
  ,
  {
    path: "/list-membership",
    component: ListMembership,
  },
  {
    path: "/membership-detail",
    component: MembershipDetail,
  },
  {
    path: "/membership-cart",
    component: MemberShipCart,
  },
];

export default ListRouter ;