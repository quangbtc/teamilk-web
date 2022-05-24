import classNames from "classnames/bind";
import styles from "./NewProduct.module.scss";
import ProductItem from "../ProductItem";
import Slider from "react-slick";
const cx = classNames.bind(styles);
function NewProduct({ title, settings }) {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("head-title")}>{title}</h3>
      <div className={cx("wrapper-product-item")}>
        <Slider {...settings}>
          <div className={cx("inner-slider")}>
            <ProductItem />
          </div>
          <div className={cx("inner-slider")}>
            <ProductItem />
          </div>

          <div className={cx("inner-slider")}>
            <ProductItem />
          </div>

          <div className={cx("inner-slider")}>
            <ProductItem />
          </div>

          <div className={cx("inner-slider")}>
            <ProductItem />
          </div>

          <div className={cx("inner-slider")}>
            <ProductItem />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default NewProduct;
