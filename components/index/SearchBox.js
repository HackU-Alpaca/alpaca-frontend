import { useState, useCallback } from "react";

import styles from "../../styles/index/Search.module.css";

const SearchBox = props => {;
  const [tempQuery, setTempQuery] = useState(props.query);

  const onChange = useCallback( event => {
    const newQuery = event.target.value;
    setTempQuery(newQuery);
  }, [])

  const onEnterKeyDown = event => {
    if (event.key === "Enter") {
      props.setQuery(tempQuery);
      props.close();
    }
  }

  return (

    <div className={styles.container}>
      <img
        src="/icons/search_icon_dark.svg"
        alt="検索"
        className="search-icon"
      />
      <input
        className="search"
        placeholder={"Search..."}
        type="text"
        defaultValue={tempQuery}
        onBlur={props.close}
        onChange={onChange}
        onKeyDown={onEnterKeyDown}
        autoFocus
      />
    </div>
  );
}

export default SearchBox;