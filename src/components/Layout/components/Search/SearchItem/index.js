import classNames from "classnames/bind";
import styles from "../Search.module.scss";
import { Images } from "~/assets/Images";
import Img from "~/components/Img";
const cx = classNames.bind(styles);
function SearchItem({ data }) {
  return (
    <div className={cx("wrapper-item")}>
      <Img
        className={cx("wrapper-img")}
        src={data.thumbnail}
        fallBack={Images.noImage}
      />
      <div className="wrapper-content">
        <div className={cx("name")}>{data.name}</div>
        <div className={cx("price")}>{data.price}</div>
      </div>
    </div>
  );
}

export default SearchItem;
