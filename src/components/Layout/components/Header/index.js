import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import {
  faCartShopping,
  faInbox,
  faMessage,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { Images } from "~/assets/Images";
import Img from "~/components/Img";
import Search from "~/components/Layout/components/Search";
import TippyHeadless from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Wrapper as WrapperPopper } from "~/components/Popper";
import AccountItem from "~/components/Layout/components/Header/AccountItem";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Navigator from "../Navigator";
import { mainMenu } from "~/DumpData/dataMenu";
const cx = classNames.bind(styles);
function Header() {
  const currentUser = false;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Img
            className={cx("logo")}
            src={Images.logo}
            alt="logo"
            fallBack={Images.noImage}
          />
        </div>
        <Search />
        {currentUser ? (
          <div className={cx("right-content")}>
            <Tippy content="Tin nhắn">
              <span>
                <FontAwesomeIcon
                  className={cx("action-icon")}
                  icon={faMessage}
                />
              </span>
            </Tippy>
            <Tippy content="Hộp thư">
              <span>
                <FontAwesomeIcon className={cx("action-icon")} icon={faInbox} />
              </span>
            </Tippy>
            <Tippy content="Facebook">
              <span>
                <FontAwesomeIcon
                  className={cx("action-icon")}
                  icon={faFacebook}
                />
              </span>
            </Tippy>
            <Tippy content="Giỏ hàng">
              <span>
                <FontAwesomeIcon
                  className={cx("action-icon")}
                  icon={faCartShopping}
                />
              </span>
            </Tippy>
            <TippyHeadless
              render={(attrs) => (
                <div
                  className={cx("wrapper-menu-popper")}
                  tabIndex="-1"
                  {...attrs}
                >
                  <WrapperPopper>
                    {/* AccountItem */}
                    <AccountItem />
                  </WrapperPopper>
                </div>
              )}
              placement="bottom-end"
              delay={[0, 500]}
              interactive
            >
              <div className={cx("wrapper-icon-menu")}>
                <Img
                  src="https://icdn.dantri.com.vn/thumb_w/640/2019/11/02/nhung-hot-girl-noi-bat-thang-10-docx-1572697558949.jpeg"
                  className={cx("avatar")}
                  alt="name-account"
                  fallBack={Images.noImage}
                />
              </div>
            </TippyHeadless>
          </div>
        ) : (
          <div className={cx("right-content")}>
            <Button to="/register" type="text" size="small">
              Đăng ký
            </Button>
            <Button
              to="/login"
              type="primary"
              size="small"
              rightIcon={<FontAwesomeIcon icon={faSignIn} />}
            >
              Đăng nhập
            </Button>
          </div>
        )}
      </div>
      <div className={cx("navigator")}>
        {mainMenu &&
          mainMenu.length > 0 &&
          mainMenu.map((item, index) => {
            return <Navigator data={item} key={index} />;
          })}
      </div>
    </div>
  );
}

export default Header;
