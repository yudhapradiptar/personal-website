import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/skills.module.scss";

const Experience = () => {
  return (
    <>
      <Layout experience>
        <Head>
          <title>Experience</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </Layout>
      <div className={styles.container}>
        <div className={styles.workexp}>
          <h2 className={styles.heading}>Work Experience</h2>
          <p className={styles.paragraph}>
            I am an aspiring software engineer currently in my 8
            <sup className={styles.superscript}>th</sup> and last semester in
            Faculty of Computer Science in University of Indonesia majoring in
            Information System. I am someone who is eager to learn and gain
            experience. I can adapt to well in new and unfamiliar environment.
          </p>
        </div>
        <div className={styles.otherexp}>
          <h2 className={styles.heading}>Other Experience</h2>
          <p className={styles.paragraph}>
            I am an aspiring software engineer currently in my 8
            <sup className={styles.superscript}>th</sup> and last semester in
            Faculty of Computer Science in University of Indonesia majoring in
            Information System. I am someone who is eager to learn and gain
            experience. I can adapt to well in new and unfamiliar environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;