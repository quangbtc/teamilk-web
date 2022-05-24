//Import components
import Banner from "./components/Banner";
import NewProduct from "./components/NewProduct";
//Import class
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Sections from "./components/Sections";
const cx = classNames.bind(styles);

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    rows: 1,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className={cx("wrapper")}>
      <Banner />
      <Sections>
        <NewProduct title="Sản phẩm mới nhất" settings={settings} />
      </Sections>
      <Sections>
        <NewProduct title="Sản phẩm bán chạy" settings={settings} />
      </Sections>
    </div>
  );
};

export default Home;
