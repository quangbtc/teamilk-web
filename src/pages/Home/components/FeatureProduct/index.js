import classNames from "classnames/bind";
import styles from "./FeatureProduct.module.scss";
import FeatureProductItem from "./FeatureProductItem";

const cx = classNames.bind(styles);
function FeatureProduct({ title, settings }) {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("head-title")}>{title}</h3>
      <div className={cx("wrapper-product-item")}>
        <FeatureProductItem />
        <FeatureProductItem />
        <FeatureProductItem />
        <FeatureProductItem />
        <FeatureProductItem />
        <FeatureProductItem />
        <FeatureProductItem />
        <FeatureProductItem />
      </div>
    </div>
  );
}

export default FeatureProduct;
