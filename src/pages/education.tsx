import Layout from "../components/layout";
import Header from "../components/header";
import styles from "../styles/education.module.scss";
import Footer from "../components/footer";

const Education = () => {
  return (
    <>
      <Header title="Education" />
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.comp}>
            <h2 className={styles.heading2}>Education</h2>
            <div className={styles.heading3}>University of Indonesia</div>
            <div className={styles.eduTitleRow}>
              <div className={styles.eduTitleRow__title}>Faculty of Computer Science: Major in Information System</div>
              <div className={styles.eduTitleRow__period}>2017 - 2021</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Education;
