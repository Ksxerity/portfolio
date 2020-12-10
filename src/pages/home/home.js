import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/tabs';
import Tab from 'react-bootstrap/tab';
import styles from './home.module.scss';
import {
  arrowIcon,
  css3Icon,
  expressIcon,
  gitIcon,
  html5Icon,
  javascriptIcon,
  linkedinIcon,
  nodejsIcon,
  reactIcon,
  vuejsIcon
} from '../../assets';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameError: false,
      emailError: false,
      messageError: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const form = e.target;
    const data = new FormData(form);
    console.log(data);
    // this.handleValidation(data);
    // const xhr = new XMLHttpRequest();
    // xhr.open(form.method, form.action);
    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState !== XMLHttpRequest.DONE) return;
    //   if (xhr.status === 200) {
    //     form.reset();
    //     this.setState({ status: "SUCCESS" });
    //   } else {
    //     this.setState({ status: "ERROR" });
    //   }
    // };
    // xhr.send(data);
  }

  handleValidation = (data) => {
    // https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
    for (const [key, val] of data.entries()) {
      switch (key) {
        case 'name':
          if (val === '') {
            this.nameError = true;
          } else {
            this.nameError = false;
          }
          break;
        case 'message':
          if (val === '') {
            this.messageError = true;
          } else {
            this.messageError = false;
          }
          break;
        case 'email':
          // Email needs a prefix, an @ sign, a domain name, and end with . followed by atleast 2 characters (ex: .com, .cc, .org)
          this.handleEmailValidation(val);
          break;
      }
    }
  }

  render() {
    return (
      <div className={styles.home}>
        <div className={styles.banner}>
          <div className={styles["welcome-text"]}>
            Hey, thanks for dropping in!
            <a href="https://www.linkedin.com/in/kyle-ki/">
              <img className={styles["linkedin-icon"]} src={linkedinIcon}></img>
            </a>
          </div>
          <div className={styles["welcome-description"]}>
            My name is Kyle and I&apos;m a recent graduate of Rochester Institute of Technology. I am seeking an entry level position as a front-end or a full-stack developer.
          </div>
        </div>
        <div className={styles["scroll-down"]}>
          <img className={styles.arrow1} src={arrowIcon}></img>
          <img className={styles.arrow2} src={arrowIcon}></img>
          <img className={styles.arrow3} src={arrowIcon}></img>
          <img className={styles.arrow4} src={arrowIcon}></img>
          <img className={styles.arrow5} src={arrowIcon}></img>
          https://dev.to/chriseickemeyergh/building-custom-scroll-animations-using-react-hooks-4h6f
        </div>
        <div name="skills" className={styles["skills-section"]}>
          <div className={styles["skills-panel"]}>
            <div className={styles["skills-panel-description"]}>
              Below are some of the skills I have acquired as a student, intern, and hobbist.
            </div>
            <div className={styles["skill-item"]}>
              <div className={styles["skill-item-title"]}>
                Front-end
              </div>
              <div className={styles["skill-item-description"]}>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <img className={styles["skill-icon"]} src={css3Icon}></img>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                  <img className={styles["skill-icon"]} src={html5Icon}></img>
                </a>
                <a href="https://www.javascript.com/">
                  <img className={styles["skill-icon"]} src={javascriptIcon}></img>
                </a>
                <a href="https://vuejs.org/">
                  <img className={styles["skill-icon"]} src={vuejsIcon}></img>
                </a>
                <a href="https://reactjs.org/">
                  <img className={styles["skill-icon"]} src={reactIcon}></img>
                </a>
              </div>
            </div>
            <div className={styles["skill-item"]}>
              <div className={styles["skill-item-title"]}>
                Back-end
              </div>
              <div className={styles["skill-item-description"]}>
                <a href="https://nodejs.org/en/">
                  <img className={styles["skill-icon"]} src={nodejsIcon}></img>
                </a>
                <a href="https://expressjs.com/">
                  <img className={styles["skill-icon"]} src={expressIcon}></img>
                </a>
              </div>
            </div>
            <div className={styles["skill-item"]}>
              <div className={styles["skill-item-title"]}>
                Version Control
              </div>
              <div className={styles["skill-item-description"]}>
                <a href="https://git-scm.com/">
                  <img className={styles["skill-icon"]} src={gitIcon}></img>
                </a>
              </div>
            </div>
            This website was made as an introduction to React
            https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
            </div>
        </div>
        <div name="experience" className={styles["experience-section"]}>
          Experience
          <Carousel interval={null} className={styles["experience-panel"]}>
            <Carousel.Item className={styles["experience-item"]}>
              <div className={styles["experience-title"]}>
                Fujifilm
              </div>
              <div className={styles["experience-position"]}>
                Software Engineer Co-op
              </div>
              <div className={styles["experience-description"]}>
                My task as an intern was to support the full-time developers in the maintenence of existing features and the development
                of new features for a kiosk system. My responsibilities included performing bug fixes, communicating with quality assurance,
                conducting code reviews, and picking up weekly tasks for creating new features. Completing tasks required me to
                replicate the templates designed by the UI/UX team as well as implement the functionality communicated by the customer.
              </div>
              <div className={styles["experience-skills"]}>
                Skills used: Javascript, HTML, Css, Vuejs, Nodejs, Agile, Documentation, Debugging
              </div>
              <div className={styles["experience-duration"]}>
                3 months full time, 3 months part time
              </div>
            </Carousel.Item>
            <Carousel.Item className={styles["experience-item"]}>
              <div className={styles["experience-title"]}>
                The MITRE Corporation
              </div>
              <div className={styles["experience-position"]}>
                description
              </div>
              <div className={styles["experience-description"]}>
                description
              </div>
              <div className={styles["experience-skills"]}>
                Skills used: Java, Vuejs, Javascript, Ubuntu, Docker, Git, Shell Scripts, Agile, Documentation
              </div>
              <div className={styles["experience-duration"]}>
                3 months full time
              </div>
            </Carousel.Item>
            <Carousel.Item className={styles["experience-item"]}>
              <div className={styles["experience-title"]}>
                R.I.T. College of Computer Engineering
              </div>
              <div className={styles["experience-position"]}>
                Research Assistant Co-op
              </div>
              <div className={styles["experience-description"]}>
                The project I was assigned to was called ASSERT which was a program meant to utilize a Dynamic Bayesian Network to reveal
                attack patterns and predict targets in a given network. My role as a research assistant was to optimize the calculations, perform
                benchmark tests to reveal bottlenecks, and to employ new algorithms to enhance the statistical accuracy of the program.
              </div>
              <div className={styles["experience-skills"]}>
                Skills used: Java, Git, Documentation, Debugging
              </div>
              <div className={styles["experience-duration"]}>
                6 months full time, 6 months part-time
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div name="projects" className={styles["projects-section"]}>
          <div className={styles["projects-panel"]}>
            <Tabs>
              <Tab eventKey="project1" title="Project1">
                Project 1
            </Tab>
              <Tab eventKey="project2" title="Project2">
                Project 2
            </Tab>
              <Tab eventKey="project3" title="Project3">
                Project 3
            </Tab>
            </Tabs>
          </div>
        </div>
        <div name="contact" className={styles["contact-section"]}>
          <div className={styles["contact-panel"]}>
            Contact Me
            <form method="POST" action="https://formspree.io/f/mwkwreoe" onSubmit={this.handleSubmit} noValidate>
              <div className={["form-group", styles["contact-item"]].join(' ')}>
                <label>name</label>
                <input type="text" name="name" className="form-control" placeholder="Ex: John Doe" maxLength="250"></input>
              </div>
              <div className={["form-group", styles["contact-item"]].join(' ')}>
                <label>email</label>
                <input type="email" name="email" className="form-control" placeholder="name@example.com" maxLength="250"></input>
              </div>
              <div className={["form-group", styles["contact-item"]].join(' ')}>
                <label>message</label>
                <textarea type="text" name="message" className="form-control" rows="5" placeholder="Enter message here..."></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <div>
          Footer?
        </div>
      </div>
    );
  }
}