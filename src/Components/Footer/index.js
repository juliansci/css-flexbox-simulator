import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './index.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <a className={styles.name} href="https://julianscialabba.com" target="_blank" rel="noopener noreferrer">
          Julián Scialabba
        </a>
      </div>
      <div className={styles.socialContainer}>
        <a className={styles.socialItem} href="http://twitter.com/juliansci" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className={styles.socialItem} href="https://www.linkedin.com/in/julianscialabba/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className={styles.socialItem} href="http://github.com/juliansci" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
