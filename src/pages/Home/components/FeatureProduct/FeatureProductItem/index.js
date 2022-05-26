import Img from "~/components/Img";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./FeatureProductItem.module.scss";
const cx = classNames.bind(styles);

function FeatureProductItem({ data }) {
  return (
    <>
      <div className={cx("wp-img-product")}>
        <Img
          className={cx("img-product")}
          src="https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-tra-sua-dep-ngon-nhat.jpg"
          alt="New-products"
        />
        <div className={cx("content")}>
          <h3 className={cx("product-name")}>Trà sữa chân trâu trắng</h3>
          <p className={cx("price")}>Giá :2500000</p>
          <div className={cx("action")}>
            <Button type="outline" size="medium" rounded>
              Thêm vào giỏ hàng
            </Button>
            <Button type="primary" size="medium" rounded>
              Đặt hàng
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProductItem;
