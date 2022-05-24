import { useState, forwardRef } from "react";
import { Images } from "~/assets/Images";

import classNames from "classnames/bind";
import styles from "~/components/Img/Img.module.scss";
const cx = classNames.bind(styles);

function Img({
  src,
  alt,
  className,
  fallBack: customFallBack = Images.noImage,
  ...props
}) {
  const [fallBack, setFallBack] = useState("");
  const classNames = cx({ [className]: className });
  const handleErrorImage = () => {
    setFallBack(customFallBack);
  };
  return (
    <img
      src={fallBack || src}
      className={classNames}
      alt={alt}
      onError={() => handleErrorImage()}
      {...props}
    />
  );
}

export default forwardRef(Img);
