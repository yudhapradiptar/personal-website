import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/experience.module.scss";

const Experience = () => {
  return (
    <>
      <Layout title="Experience" />
      <div className={styles.container}>
        <div className={styles.workexp}>
          <h2 className={styles.heading2}>Work Experience</h2>
          <div className={styles.exp}>
            <div className={styles.heading3}>Sayurbox</div>
            <div className={styles.jobTitleRow}>
              <p>Software Development Engineer Intern</p>
              <p>2020 - 2021</p>
            </div>
            <ul>
              <li>
                Building the frontend side of Sayurbox’s{" "}
                <a>Live Configuration</a> using React.js
              </li>
              <li>
                Developing on Sayurbox’s consumer mobile app using React Native
              </li>
            </ul>
          </div>
          <div className={styles.exp}>
            <div className={styles.heading3}>DesktopIP</div>
            <div className={styles.jobTitleRow}>
              <p>ERP Consultant Intern</p>
              <p>2020 - 2020</p>
            </div>
            <ul>
              <li>
                Analyze client’s purchasing and inventory needs to be
                implemented using Odoo ERP System
              </li>
              <li>
                Implementing Odoo ERP System’s purchasing and inventory module
                based on client’s requirements
              </li>
              <li>
                Analyze client’s business process to be implemented using custom
                Odoo ERP System and Moodle
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.otherexp}>
          <h2 className={styles.heading2}>Other Experience</h2>
          <div className={styles.exp}>
            <div className={styles.heading3}>
              Post Product Operation Information System
            </div>
            <div className={styles.jobTitleRow}>
              <p>Lead Programmer</p>
              <p>2020 - 2020</p>
            </div>
            <ul>
              <li>
                Building the Information System using Spring framework, HTML,
                Javascript, and CSS
              </li>
              <li>Leading the implementation process</li>
              <li>Building the Information System based on System Proposal</li>
            </ul>
          </div>
          <div className={styles.exp}>
            <div className={styles.heading3}>Compfest XI</div>
            <div className={styles.jobTitleRow}>
              <p>Partnership Staff of Innovative Application Competition</p>
              <p>2019 - 2019</p>
            </div>
          </div>
          <div className={styles.exp}>
            <div className={styles.heading3}>Pemira Fasilkom UI</div>
            <div className={styles.jobTitleRow}>
              <p>Voting Staff</p>
              <p>2018 - 2018</p>
            </div>
          </div>
          <div className={styles.exp}>
            <div className={styles.heading3}>Wisuda Fasilkom UI</div>
            <div className={styles.jobTitleRow}>
              <p>Documentation Staff</p>
              <p>2018 - 2018</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
