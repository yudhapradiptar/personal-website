import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/education.module.scss";
import Footer from "../components/footer";

const Education = () => {
  return (
      <>
        <Layout title = "Education" />
        <div className={styles.body}>
        <div className={styles.container}>
        <div className={styles.comp}>
          <h2 className={styles.heading2}>Education</h2>
          <div className={styles.heading3}>University of Indonesia</div>
          <div className={styles.jobTitleRow}>
              <p>Faculty of Computer Science: Major in Information System</p>
              <p>2017 - 2021</p>
            </div>
        </div>
        </div>
        <Footer />
        </div>
      </>
  );
};

export default Education;
