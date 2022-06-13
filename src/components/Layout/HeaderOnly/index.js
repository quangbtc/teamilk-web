import Header from "~/components/Layout/components/Header";
import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";
import Footer from "~/components/Footer";
const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderOnly;
