import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/tabs';
import Tab from 'react-bootstrap/tab';
import styles from './home.module.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const form = e.target;
    const data = new FormData(form);
    this.handleValidation(data);
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
    for (const [key, val] of data.entries()) {
      console.log(key + ',' + val)
    }
  }

  render() {
    return (
      <div className={styles.home}>
        <div className={styles.banner}>
          <div className={styles["welcome-text"]}>
            Hey, thanks for dropping in!
            <a href="https://www.linkedin.com/in/kyle-ki/">
              <img className={styles["linkedin-icon"]} src={process.env.PUBLIC_URL + '/assets/linkedin-icon.png'}></img>
            </a>
          </div>
          <div className={styles["welcome-description"]}>
            My name is Kyle and I&apos;m a recent graduate of Rochester Institute of Technology. I am seeking an entry level position as a front-end or a full-stack developer.
          </div>
        </div>
        <div className={styles["scroll-down"]}>
          <img className={styles.arrow1} src={process.env.PUBLIC_URL + '/assets/arrow.svg'}></img>
          <img className={styles.arrow2} src={process.env.PUBLIC_URL + '/assets/arrow.svg'}></img>
          <img className={styles.arrow3} src={process.env.PUBLIC_URL + '/assets/arrow.svg'}></img>
          <img className={styles.arrow4} src={process.env.PUBLIC_URL + '/assets/arrow.svg'}></img>
          <img className={styles.arrow5} src={process.env.PUBLIC_URL + '/assets/arrow.svg'}></img>
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
                  <img className={styles["skill-icon"]} src={process.env.PUBLIC_URL + '/assets/css3-icon.svg'}></img>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                  <img className={styles["skill-icon"]} src={process.env.PUBLIC_URL + '/assets/html5-icon.svg'}></img>
                </a>
                <a href="https://www.javascript.com/">
                  <img className={styles["skill-icon"]} src={process.env.PUBLIC_URL + '/assets/javascript-icon.svg'}></img>
                </a>
                <a href="https://vuejs.org/">
                  <img className={styles["skill-icon"]} src={process.env.PUBLIC_URL + '/assets/vuejs-icon.svg'}></img>
                </a>
                <a href="https://reactjs.org/">
                  <img className={styles["skill-icon"]} src={process.env.PUBLIC_URL + '/assets/react-icon.svg'}></img>
                </a>
              </div>
            </div>
            <div className={styles["skill-item"]}>
              <div className={styles["skill-item-title"]}>
                Back-end
              </div>
              <div className={styles["skill-item-description"]}>
                <a href="https://nodejs.org/en/">
                  <img className={styles["skill-icon"]} src={process.env.PUBLIC_URL + '/assets/nodejs-icon.svg'}></img>
                </a>
                <a href="https://expressjs.com/">
                  <img className={styles["skill-icon"]} src={process.env.PUBLIC_URL + '/assets/express-icon.svg'}></img>
                </a>
              </div>
            </div>
            <div className={styles["skill-item"]}>
              <div className={styles["skill-item-title"]}>
                Version Control
              </div>
              <div className={styles["skill-item-description"]}>
                <a href="https://git-scm.com/">
                  <img className={styles["skill-icon"]} src={process.env.PUBLIC_URL + '/assets/git-icon.svg'}></img>
                </a>
              </div>
            </div>
            This website was made as an introduction to React
            https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
            </div>
        </div>
        <div name="experience" className={styles["experience-section"]}>
          <Carousel interval={null} className={styles["experience-panel"]}>
            <Carousel.Item className={styles["experience-item"]}>
              Company name. Position. Duration. Experience there. Skills used
              asdasdasd
            </Carousel.Item>
            <Carousel.Item className={styles["experience-item"]}>
              Company name. Position. Duration. Experience there. Skills used
              qweqweqwe
            </Carousel.Item>
            <Carousel.Item className={styles["experience-item"]}>
              Company name. Position. Duration. Experience there. Skills used
              zxczxczxc
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
              <div className={styles["contact-name"]}>
                name
                <input type="text" name="name"></input>
              </div>
              <div className={styles["contact-email"]}>
                email
                <input type="email" name="email"></input>
              </div>
              <div className={styles["contact-message"]}>
                message
                <input type="text" name="message"></input>
              </div>
              <button>Submit</button>
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