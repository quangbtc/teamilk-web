import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { menu } from "~/DumpData/dataMenu";

import classNames from "classnames/bind";
import styles from "~/components/Layout/components/Header/Header.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper-menu-item")}>
      {menu &&
        menu.length > 0 &&
        menu.map((item, index) => {
          return (
            <Button
              className={cx("menu-item")}
              type="text"
              leftIcon={item.icon}
              key={index}
            >
              {item.name}
            </Button>
          );
        })}
    </div>
  );
}

export default AccountItem;
