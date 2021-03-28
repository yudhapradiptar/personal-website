import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/layout.module.scss";

const Layout = ({ about, experience, skills, education, contact }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrap}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/profile-picture.jpeg"
              className={styles.borderCircle}
              height={200}
              width={200}
              alt="Yudha Pradipta Ramadan"
            />
            <h1 className={styles.heading}>Yudha Pradipta Ramadan</h1>
          </>
        </header>
        <nav className={styles.navigation}>
          <ul className={styles.navigationRow}>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a>Experience</a>
              </Link>
            </li>
            <li>
              <Link href="/skills">
                <a>Skills</a>
              </Link>
            </li>
            <li>
              <Link href="/education">
                <a>Education</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
