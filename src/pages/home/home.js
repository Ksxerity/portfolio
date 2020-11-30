import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './home.module.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          projects? with carousel? Or perhaps a different way to show it
        </div>
        <div name="contact" className={styles["contact-section"]}>
          Email address
          Form for inputting message
        </div>
        <div>
          Footer?
        </div>
      </div>
    );
  }
}