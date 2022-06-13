import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

import Img from "~/components/Img";

const cx = classNames.bind(styles);
function Banner({ post }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-title")}>
        <h3 className={cx("head-title")}>{post.title}</h3>
        <p className={cx("sologan")}>{post.sologan}</p>
      </div>
      <Img src={post.image} className={cx("image-banner")} alt="banner" />
    </div>
  );
}

export default Banner;
