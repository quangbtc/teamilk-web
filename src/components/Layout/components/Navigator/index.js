import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Navigator.module.scss";
const cx = classNames.bind(styles);
function Navigator({ data }) {
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("list-menu")}>
        <li className={cx("menu-item")}>
          <Link to={data.link}>{data.name}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigator;
