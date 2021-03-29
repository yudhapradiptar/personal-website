import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/portfolio.module.scss";

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
          <div className={styles.comp__image}>
          <Image
            src="/images/Post-Operation-Information-System.png"
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
          <div className={styles.comp__image}>
          <Image
              src="/images/siruangan-apap.png"
              height={270}
              width={480}
              alt="Sistem Informasi Ruangan"
            />
            <div className={styles.testingHover} style={{color:"red"}}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
