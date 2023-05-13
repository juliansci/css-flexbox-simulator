import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>CSS Flexbox Simulator</div>
      <a
        className={styles.linkGithub}
        href="https://github.com/juliansci/css-flexbox-simulator"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Github <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Header;
