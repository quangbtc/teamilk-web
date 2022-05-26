import classNames from "classnames/bind";
import styles from "./Sections.module.scss";
const cx = classNames.bind(styles);

function Sections({ children, className }) {
  const classNames = cx("wrapper", {
    [className]: className,
  });
  return <div className={classNames}>{children}</div>;
}

export default Sections;
