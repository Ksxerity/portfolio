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
            Welcome to my resume!
          </div>
          <div className={styles.blah}>
            Some additional text. Add linked-in link
          </div>
        </div>
        <div className={styles["scroll-down"]}>
          <div className={styles.arrow}></div>
          Scroll down for more info. (Text disappears as you scroll)
          Text turns into a button and moves to the side to allow the user to return to the top quickly
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
                css, html, javascript, vue, react
              </div>
            </div>
            <div className={styles["skill-item"]}>
              <div className={styles["skill-item-title"]}>
                Back-end
              </div>
              <div className={styles["skill-item-description"]}>
                nodejs, express
              </div>
            </div>
            <div className={styles["skill-item"]}>
              <div className={styles["skill-item-title"]}>
                Version Control
              </div>
              <div className={styles["skill-item-description"]}>
                git
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