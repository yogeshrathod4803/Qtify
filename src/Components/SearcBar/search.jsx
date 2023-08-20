import React from "react";
import styles from "../SearcBar/search.module.css";
import { ReactComponent as SearchIcon } from "../../Assets/Search-icon.svg";

const search = ({ placeholder, data }) => {
  return (
    <>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder} />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default search;
