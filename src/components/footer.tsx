import styles from "../styles/footer.module.scss";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__icons}>
          <AiFillLinkedin style={{marginRight: "1rem"}}/>
          <AiFillGithub style={{marginRight: "1rem"}}/>
          <AiFillInstagram />
        </div>
        <div className={styles.footer__copyright}>&copy; Copyright {currentYear}, Yudha Pradipta Ramadan</div>
      </footer>
    </>
  );
};

export default Footer;
