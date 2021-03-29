import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Education.module.scss";

const Education = () => {
  return (
    <div>
      <>
        <Layout title = "Education">
          <Head>
            <title>Education</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
        </Layout>
      </>
    </div>
  );
};

export default Education;
