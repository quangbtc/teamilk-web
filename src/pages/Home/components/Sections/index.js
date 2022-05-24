import classNames from "classnames/bind";
import styles from "./Sections.module.scss";
const cx = classNames.bind(styles);

function Sections({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default Sections;
