import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/skills.module.scss";

const Skills = () => {
  return (
      <>
        <Layout title = "Skills">
          <Head>
            <title>Skills</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
        </Layout>
      </>
  );
};

export default Skills;
