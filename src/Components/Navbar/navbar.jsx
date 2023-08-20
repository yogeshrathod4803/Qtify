import React from "react";
import Button from "../Button/button";
import Logo from "../Logo/logo";
import SearchBar from "../SearcBar/search";
import styles from "../Navbar/navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button children={"Give Feedback"} />
    </nav>
  );
};

export default NavBar;
