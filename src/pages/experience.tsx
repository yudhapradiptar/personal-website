import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/experience.module.scss";

const Experience = () => {
  return (
    <>
      <Header title="Experience" />
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.workexp}>
            <h2 className={styles.heading2}>Work Experience</h2>
            <div className={styles.comp}>
              <div className={styles.heading3}>Sayurbox</div>
              <div className={styles.jobTitleRow}>
                <p>Software Development Engineer Intern</p>
                <p>Oct 2020 - Jan 2021</p>
              </div>
              <ul>
                <li>
                  Building the frontend side of Sayurbox’s{" "}
                  <a>Live Configuration</a> using React.js
                </li>
                <li>
                  Developing on Sayurbox’s consumer mobile app using React
                  Native
                </li>
              </ul>
            </div>
            <div className={styles.comp}>
              <div className={styles.heading3}>DesktopIP</div>
              <div className={styles.jobTitleRow}>
                <p>ERP Consultant Intern</p>
                <p>Jun 2020 - Nov 2020</p>
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
                  Analyze client’s business process to be implemented using
                  custom Odoo ERP System and Moodle
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.otherexp}>
            <h2 className={styles.heading2}>Other Experience</h2>
            <div className={styles.comp}>
              <div className={styles.heading3}>
                University of Indonesia's Faculty of Computer Science
              </div>
              <div className={styles.jobTitleRow}>
                <p>
                  Teaching Assistant of Accounting and Enterprise Information
                  System
                </p>
                <p>Feb 2021 – Present</p>
              </div>
            </div>
            <div className={styles.comp}>
              <div className={styles.heading3}>
                Payfazz's Post Product Operation Information System
              </div>
              <div className={styles.jobTitleRow}>
                <p>Lead Programmer</p>
                <p>Feb 2020 - May 2020</p>
              </div>
              <ul>
                <li>
                  Building the Information System using Spring framework, HTML,
                  Javascript, and CSS
                </li>
                <li>Leading the implementation process</li>
                <li>
                  Building the Information System based on System Proposal
                </li>
              </ul>
            </div>
            <div className={styles.comp}>
              <div className={styles.heading3}>Compfest XI</div>
              <div className={styles.jobTitleRow}>
                <p>Partnership Staff of Innovative Application Competition</p>
                <p>Feb 2019 - Sep 2019</p>
              </div>
            </div>
            <div className={styles.comp}>
              <div className={styles.heading3}>Pemira Fasilkom UI</div>
              <div className={styles.jobTitleRow}>
                <p>Voting Staff</p>
                <p>Oct 2018 - Dec 2018</p>
              </div>
            </div>
            <div className={styles.comp}>
              <div className={styles.heading3}>Wisuda Fasilkom UI</div>
              <div className={styles.jobTitleRow}>
                <p>Documentation Staff</p>
                <p>Jun 2018 - Aug 2018</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Experience;
