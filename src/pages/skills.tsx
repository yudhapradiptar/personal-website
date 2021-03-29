import Layout from "../components/layout";
import styles from "../styles/skills.module.scss";
import Footer from "../components/footer";

const Skills = () => {
  return (
    <>
      <Layout title="Skills" />
      <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.comp}>
          <h2 className={styles.heading2}>Skills</h2>
          <div className={styles.category}>
            <div className={styles.category__item}>
              <p>Programming Languages: </p>
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Python</li>
              </ul>
            </div>
            <div className={styles.category__item}>
              <p>Framework: </p>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Springboot</li>
                <li>React Native</li>
                <li>Django</li>
              </ul>
            </div>
            <div className={styles.category__item}>
              <p>Database: </p>
              <ul>
                <li>SQL (MySQL, PostgreSQL)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.comp}>
          <h2 className={styles.heading2}>Languages</h2>
          <ul>
            <li>English</li>
            <li>Bahasa Indonesia</li>
          </ul>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Skills;
