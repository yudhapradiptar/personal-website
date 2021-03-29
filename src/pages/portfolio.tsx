import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/portfolio.module.scss";
import { FaEye } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <>
      <Layout title="Portfolio" />
      <div className={styles.container}>
        <h2 className={styles.heading2}>Portfolio</h2>
        <div className={styles.comp}>
          <div className={styles.heading3}>
            Payfazz's Post Product Operation Information System
          </div>
          <div className={styles.jobTitleRow}>
            <p>Group project for course Propensi</p>
            <p>2020</p>
          </div>
          <div className={styles.portoImage}>
            <Image
              src="/images/Post-Operation-Information-System.png"
              className={styles.portoImage__image}
              height={270}
              width={480}
              alt="Post Production Information System"
            />
          </div>
        </div>
        <div className={styles.comp}>
          <div className={styles.heading3}>Sistem Informasi Ruangan</div>
          <div className={styles.jobTitleRow}>
            <p>Group project for course APAP</p>
            <p>2019</p>
          </div>
          <div className={styles.portoImage}>
            <Image
              src="/images/siruangan-apap.png"
              className={styles.portoImage__image}
              height={270}
              width={480}
              alt="Sistem Informasi Ruangan"
            />
            <div className={styles.portoImage__btn}>
              <div className={styles.portoImage__overlay}>
                <div
                  className={styles.portoImage__overlay__item}
                  onClick={() =>
                    window.open("https://siruangan-d-10.herokuapp.com")
                  }
                >
                  <FaEye />{" "}
                  <div className={styles.portoImage__text}>Preview</div>
                </div>
                <div
                  className={styles.portoImage__overlay__item}
                  onClick={() =>
                    window.open("https://github.com/yudhapradiptar/TA_D_10")
                  }
                >
                  <AiFillGithub />{" "}
                  <div className={styles.portoImage__text}>Github</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
