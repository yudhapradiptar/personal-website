import Layout from "../components/layout";
import styles from "../styles/contact.module.scss";
import { MdMail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <Layout title="Contact" />
      <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.heading2}>Contact</h2>
        <div className={styles.container__item}>
          <MdMail />
          <div className={styles.heading3}>yudhapradiptar@gmail.com</div>
        </div>
        <div className={styles.container__item}>
          <div className={styles.container__item__linkedin}>
            <AiFillLinkedin
              onClick={() =>
                window.open("https://linkedin.com/in/yudhapradiptar")
              }
            />
          </div>
          <div className={styles.heading3}>linkedin.com/in/yudhapradiptar</div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Contact;
