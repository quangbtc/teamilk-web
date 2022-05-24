import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "~/components/Button/Button.module.scss";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  className,
  type = "primary", //primary,outline,text
  size = "medium", //large,small
  disabled = false,
  rounded = false,
  children,
  leftIcon,
  rightIcon,
  key,
  ...passProps
}) {
  const classNames = cx("wrapper", {
    [className]: className,
    [type]: type,
    [size]: size,
    disabled,
    rounded,
  });
  const props = {
    to,
    href,
    onClick,
    ...passProps,
  };
  if (disabled) {
    Object.keys(props).forEach((item) => {
      if (item.startsWith("on") && typeof item === "function") {
        delete props[item];
      }
    });
  }
  let Comp = "button";
  if (props.to) {
    Comp = Link;
    props.to = "to";
  } else if (props.href) {
    Comp = "a";
    props.href = "href";
  }
  return (
    <Comp className={classNames} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}> {children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
