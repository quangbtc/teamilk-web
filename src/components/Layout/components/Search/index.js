import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import TippyHeadless from "@tippyjs/react/headless";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import { dataSearchProducts } from "~/DumpData/dataProducts";
import SearchItem from "./SearchItem";
import * as productServices from "~/apiServices/productServices";
import { useDebounce } from "~/hooks";
//Class config
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const handleSearch = useDebounce(searchValue, 500);
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
  };
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchValue("");
      return;
    }
    //cleanup
    const fetchApi = async () => {
      setLoading(true);
      let res = await productServices.search({
        q: searchValue,
      });
      setSearchResult(res.data);
      setLoading(false);
    };
    fetchApi();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSearch]);
  return (
    <TippyHeadless
      render={(attrs) => (
        <div className={cx("wrapper-popper-search")} tabIndex="-1" {...attrs}>
          <WrapperPopper>
            <div className={cx("header-popper")}>Sản phẩm</div>
            {searchResult &&
              searchResult.length > 0 &&
              searchResult.map((product) => {
                return <SearchItem data={product} key={product._id} />;
              })}
          </WrapperPopper>
        </div>
      )}
      visible={show && searchResult.length > 0 ? true : false}
      interactive
      placement="bottom-end"
      onClickOutside={() => setShow(false)}
    >
      <div className={cx("wrapper")}>
        <input
          value={searchValue}
          className={cx("search-input")}
          type="text"
          placeholder="Tim kiem san pham"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShow(true)}
        />
        {searchValue && !loading && (
          <span className={cx("clear-icon")} onClick={() => handleClear()}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        )}

        {loading && (
          <span className={cx("spinner-icon")}>
            <FontAwesomeIcon icon={faSpinner} />
          </span>
        )}
        <button className={cx("btn-search")}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
