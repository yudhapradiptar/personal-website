import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div>
      <>
        <Layout portfolio>
          <Head>
            <title>Portfolio</title>
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

export default Portfolio;
