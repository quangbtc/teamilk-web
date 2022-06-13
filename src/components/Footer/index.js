//Components
import { Images } from "~/assets/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPlaceOfWorship,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
//Styled
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={Images.logo} alt="logo" />
        </div>
        <div className={cx("wrapper-content")}>
          <h3 className={cx("text-title")}>Lien he chung toi</h3>
          <ul className={cx("contact-list")}>
            <li className={cx("contact-item")}>
              <FontAwesomeIcon
                className={cx("contact-icon")}
                icon={faPlaceOfWorship}
              />
              <span className={cx("contact-text")}>Bien Hoa Dong Nai</span>
            </li>
            <li className={cx("contact-item")}>
              <FontAwesomeIcon
                className={cx("contact-icon")}
                icon={faVoicemail}
              />
              <span className={cx("contact-text")}>@gamil.com</span>
            </li>
            <li className={cx("contact-item")}>
              <FontAwesomeIcon className={cx("contact-icon")} icon={faPhone} />
              <span className={cx("contact-text")}>0988383838383</span>
            </li>
          </ul>
        </div>
        <div className={cx("wrapper-content")}>
          <h3 className={cx("text-title")}>Danh muc</h3>
          <ul className={cx("contact-list")}>
            <li className={cx("contact-item")}>
              <span className={cx("contact-text")}>Sản phẩm bán chạy</span>
            </li>
            <li className={cx("contact-item")}>
              <span className={cx("contact-text")}>Sản phẩm mới nhất</span>
            </li>
            <li className={cx("contact-item")}>
              <span className={cx("contact-text")}>Sản phẩm nổi bật</span>
            </li>
            <li className={cx("contact-item")}>
              <span className={cx("contact-text")}>Tin tức</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
