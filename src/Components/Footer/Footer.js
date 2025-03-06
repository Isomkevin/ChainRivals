import styles from './Footer.module.css';
import React from 'react';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { ReactComponent as AppStore } from "../../Resources/image/appstorebadge.svg";

const Footer = props => {
    const {
        
    } = props;

    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <Logo className={styles.logo} />
                <h2>Chain Rivals</h2>
            </div>
            <div className={styles.sections}>
              <div className={`${styles.section} ${styles.section1}`}>
                <h3 className={styles.first}>Company</h3>
                <h3>About</h3>
                <h3>Press Center</h3>
                {/* <h3>Careers</h3> */}
              </div>
              <div className={`${styles.section} ${styles.section2}`}>
                <h3 className={styles.first}>Our Partners</h3>
                <h3>LESOM DYNAMICS</h3>
              </div>
              <div className={`${styles.section} ${styles.section3}`}>
                <h3 className={styles.first}>Resources</h3>
                <h3>Help Center</h3>
                <h3>Contact</h3>
              </div>
              <div className={`${styles.section} ${styles.section4}`}>
                <h3 className={styles.first}>Product Help</h3>
                <h3>Support</h3>
                <h3>File a Bug</h3>
              </div>
            </div>
    
            <div className={styles.footerInfo}>
              <div className={styles.infoLeft}>
                <p>This page was built by LESOM DYNAMICS.</p>
                <p>Portions of this page are inspired by <span>RAWG, RAWG.io</span>.</p>
              </div>
              <div className={styles.infoRight}>
                <img className={styles.google} src={require("../../Resources/image/googleplaybadge.png")} alt="Google Play Badge" />
                <AppStore className={styles.apple} />
              </div>
            </div>
    
            <div className={styles.footerEnd}>
              <div className={styles.endLeft}>
                <h4>Privacy</h4>
                <h4>Security</h4>
                <h4>Cookies</h4>
                <h4>Legal</h4>
                <h4>Collaborative Guidelines</h4>
              </div>
    
              <div className={styles.endRight}>
                <img className={styles.social} src={require("../../Resources/image/twitter.png")} alt="Twitter Logo" />
                <img className={styles.social} src={require("../../Resources/image/instagram.png")} alt="Instagram Logo" />
              </div>
            </div>
        </div>
    );
  }
  
  export default Footer;