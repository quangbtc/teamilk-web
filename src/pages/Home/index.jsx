import { useState } from "react";
//Import components

import Banner from "./components/Banner";
import NewProduct from "./components/NewProduct";
import FeatureProduct from "./components/FeatureProduct";
import { banner } from "~/DumpData/dataBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
//Import class
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import styled from "styled-components";
import Sections from "./components/Sections";
import Button from "~/components/Button";
const cx = classNames.bind(styles);
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const ContainerBanner = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(${(props) => props.indexSlider * -85}vw);
  transition: all 0.5s;
`;
const WrapperIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  &:hover {
    background-color: #e7cfcf;
  }
`;

const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    rows: 1,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const [indexSlider, setIndex] = useState(0);
  const handleClickSlider = (direction) => {
    if (direction === "left") {
      setIndex(indexSlider > 0 ? indexSlider - 1 : banner.length - 1);
    } else {
      setIndex(indexSlider < banner.length - 1 ? indexSlider + 1 : 0);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <Wrapper>
        {banner &&
          banner.length > 0 &&
          banner.map((post, index) => {
            return (
              <ContainerBanner key={index} indexSlider={indexSlider}>
                <Banner post={post} />
              </ContainerBanner>
            );
          })}
        <WrapperIcon direction="left" onClick={() => handleClickSlider("left")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </WrapperIcon>
        <WrapperIcon
          direction="right"
          onClick={() => handleClickSlider("right")}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </WrapperIcon>
      </Wrapper>

      <Sections>
        <NewProduct title="Sản phẩm mới nhất" settings={settings} />
      </Sections>
      <Sections>
        <NewProduct title="Sản phẩm bán chạy" settings={settings} />
      </Sections>
      <Sections className={cx("wp-feature-product")}>
        <FeatureProduct title="Sản phẩm gợi ý" settings={settings} />
        <div className={cx("btn-view-more")}>
          <Button type="outline" size="medium">
            Xem thêm
          </Button>
        </div>
      </Sections>
    </div>
  );
};

export default Home;
