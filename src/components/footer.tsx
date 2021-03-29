import styles from "../styles/footer.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__icons}>
          <div className={styles.footer__icons__item}>
            <AiFillLinkedin
              onClick={() =>
                window.open("https://linkedin.com/in/yudhapradiptar")
              }
            />
          </div>
          <div className={styles.footer__icons__item}>
            <AiFillGithub
              onClick={() => window.open("https://github.com/yudhapradiptar")}
            />
          </div>
          <div className={styles.footer__icons__item}>
            <AiFillInstagram
              onClick={() =>
                window.open("https://www.instagram.com/yudhapradiptar/")
              }
            />
          </div>
          <div className={styles.footer__icons__itemLast}>
            <AiFillMediumSquare
              onClick={() => window.open("https://yudha512000.medium.com/")}
            />
          </div>
        </div>
        <div className={styles.footer__copyright}>
          &copy; Copyright {currentYear}, Yudha Pradipta Ramadan
        </div>
      </footer>
    </>
  );
};

export default Footer;
