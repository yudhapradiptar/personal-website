import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div>
      <>
        <Layout title="Contact">
          <Head>
            <title>Contact</title>
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

export default Contact;
