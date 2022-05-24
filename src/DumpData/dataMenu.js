import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHistory,
  faReceipt,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export const menu = [
  {
    name: "Thông tin cá nhân",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    name: "Thông báo",
    icon: <FontAwesomeIcon icon={faBullhorn} />,
  },
  {
    name: "Thông tin đơn hàng",
    icon: <FontAwesomeIcon icon={faReceipt} />,
  },
  {
    name: "Lịch sử đơn hàng",
    icon: <FontAwesomeIcon icon={faHistory} />,
  },
  {
    name: "Đăng xuất",
    icon: <FontAwesomeIcon icon={faSignOut} />,
  },
];
export const mainMenu = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Giới thiệu",
    link: "/gioi-thieu",
  },
  {
    name: "Sản phẩm",
    link: "/san-pham",
  },
  {
    name: "Tin tức",
    link: "/tin-tuc",
  },
  {
    name: "Liên hệ",
    link: "/lien-he",
  },
];
