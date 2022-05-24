import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

import { faTruckPlane } from "@fortawesome/free-solid-svg-icons";
import Img from "~/components/Img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";
const cx = classNames.bind(styles);
function Banner() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-title")}>
        <h3 className={cx("head-title")}>Trà sữa truyền thống</h3>
        <p className={cx("sologan")}>
          Bỏ ai cũng được nhưng không bỏ được trà sữa.
        </p>
      </div>
      <Img
        src="https://toigingiuvedep.vn/wp-content/uploads/2021/11/background-tra-sua-doc-dao-ngot-lim-cho-tin-do-me-tra-sua.jpg"
        className={cx("image-banner")}
        alt="banner"
      />
    </div>
  );
}

export default Banner;
