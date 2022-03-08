import { useState, useCallback, useEffect } from "react";

import styles from "../../styles/index/Search.module.css";

const SearchBox = props => {;

  const onChange = useCallback( event => {
    const newQuery = event.target.value;
    props.setQuery(newQuery);
  }, [])

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
        onBlur={props.close}
        onChange={onChange}
        autoFocus
      />
    </div>
  );
}

export default SearchBox;