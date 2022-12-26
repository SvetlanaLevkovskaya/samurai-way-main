import React from "react";
import logo from "../../logo.png";
import styles from "./Header.module.css"

const Header = (props: any) => {
  return (
    <header className={styles.header}>
      <img src={logo}
           alt="img" />
    </header>
  );
};

export default Header;