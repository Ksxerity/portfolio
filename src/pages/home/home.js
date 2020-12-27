import React, { useState, useLayoutEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';
// import Tabs from 'react-bootstrap/tabs';
// import Tab from 'react-bootstrap/tab';
import styles from './home.module.scss';
import {
  arrowIcon,
  css3Icon,
  expressIcon,
  gitIcon,
  html5Icon,
  javascriptIcon,
  nodejsIcon,
  reactIcon,
  vuejsIcon
} from '../../assets';

const Home = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [percentShown, setPercentShown] = useState({
    scrollTopIcon: 1,
    skillsSection: 0,
    experienceSection: 0,
    contactSection: 0
  });
  const scrollSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useLayoutEffect(() => {
    // https://dev.to/chriseickemeyergh/building-custom-scroll-animations-using-react-hooks-4h6f
    if (!scrollSectionRef.current) return
    const getTopPos = (ref) => {
      return ref.current.getBoundingClientRect().top;
    };
    const getBottomPos = (ref) => {
      return ref.current.getBoundingClientRect().bottom;
    };
    const scrollSectionPos = Math.ceil(getBottomPos(scrollSectionRef));
    const skillsSectionPos = Math.ceil(getTopPos(skillsSectionRef) * 1.3);
    const experienceSectionPos = Math.ceil(getTopPos(experienceSectionRef) * 1.25);
    const contactSectionPos = Math.ceil(getTopPos(contactSectionRef) * 1.2);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollSectionPos < scrollPosition) {
        if (window.scrollY < 500) {
          setPercentShown(state => ({ ...state, scrollTopIcon: (500 - Math.round(window.scrollY)) / 500 }));
        } else {
          setPercentShown(state => ({ ...state, scrollTopIcon: 0 }));
        }
      }
      if (skillsSectionPos < scrollPosition) {
        setPercentShown(state => ({ ...state, skillsSection: 1 }));
      } else {
        setPercentShown(state => ({ ...state, skillsSection: 0 }));
      }
      if (experienceSectionPos < scrollPosition) {
        setPercentShown(state => ({ ...state, experienceSection: 1 }));
      } else {
        setPercentShown(state => ({ ...state, experienceSection: 0 }));
      }
      if (contactSectionPos < scrollPosition) {
        setPercentShown(state => ({ ...state, contactSection: 1 }));
      } else {
        setPercentShown(state => ({ ...state, contactSection: 0 }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const formValid = handleValidation(data);
    if (formValid) {
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
        }
      };
      xhr.send(data);
    }
  }

  const handleValidation = (data) => {
    let valid = true;
    for (const [key, val] of data.entries()) {
      switch (key) {
        case 'name':
          if (val === '') {
            setNameError(true);
            valid = false;
          } else {
            setNameError(false);
          }
          break;
        case 'message':
          if (val === '') {
            setMessageError(true);
            valid = false;
          } else {
            setMessageError(false);
          }
          break;
        case 'email': {
          // Email needs a prefix, an @ sign, a domain name, and end with . followed by atleast 2 characters (ex: .com, .cc, .org)
          let emailArr = val.split("@");
          if (emailArr.length !== 2) {
            // Check for one @ sign in email
            setEmailError(true);
            valid = false;
          } else {
            let domainName = emailArr[1].split(".");
            if (emailArr[0] === "") {
              // Check for a prefix with atleast 1 character
              setEmailError(true);
              valid = false;
            } else if (domainName.length <= 1) {
              // Check for a period
              setEmailError(true);
              valid = false;
            } else if (domainName[0] === "") {
              // Check for a domain name with atleast 1 character
              setEmailError(true);
              valid = false;
            } else if (domainName[domainName.length - 1].length <= 1) {
              // Check that the domain name ends with atleast two characters after the period
              setEmailError(true);
              valid = false;
            } else {
              setEmailError(false);
            }
          }
          break;
        }
      }
    }
    return valid;
  }

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div className={styles["welcome-text"]}>
          Hey, thanks for dropping in!
        </div>
        <div className={styles["welcome-description"]}>
          My name is Kyle and I&apos;m a recent graduate of Rochester Institute of Technology. I am seeking an entry level position as a front-end or a full-stack developer.
          </div>
      </div>
      <div className={styles["scroll-down"]} ref={scrollSectionRef}>
        <div style={{ opacity: percentShown.scrollTopIcon }} className={styles["arrow-down"]}></div>
        <div style={{ opacity: percentShown.scrollTopIcon }} className={styles["scroll-text"]}>Read More</div>
        <a onClick={scrollToTop}>
          <img className={[styles.arrowUp, percentShown.scrollTopIcon === 0 ? styles.show : null].join(' ')} src={arrowIcon}></img>
        </a>
      </div>
      <div name="skills" className={[styles["skills-section"], percentShown.skillsSection === 1 ? styles.show : null].join(' ')} ref={skillsSectionRef}>
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
            </div>
      </div>
      <div name="experience" className={[styles["experience-section"], percentShown.experienceSection === 1 ? styles.show : null].join(' ')} ref={experienceSectionRef}>
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
              Software Engineer Co-op
              </div>
            <div className={styles["experience-description"]}>
              I had the unique opportunity to work on several projects over the course of my internship at MITRE. This allowed me to
              gain small experiences in using various technologies like Docker, Ubuntu, and Vue.js. I was able to cooperate with
              other interns to share knowledge, collaborate on code development, and perform code reviews. Under the leadership
              of our supervisor, my team participated in daily scrum meetings and conducted a final persentation for some of the employees.
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
      {/* <div name="projects" className={styles["projects-section"]}>
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
      </div> */}
      <div name="contact" className={[styles["contact-section"], percentShown.contactSection === 1 ? styles.show : null].join(' ')} ref={contactSectionRef}>
        <div className={styles["contact-panel"]}>
          Contact Me
            <form method="POST" action="https://formspree.io/f/mwkwreoe" onSubmit={handleSubmit} noValidate>
            <div className={["form-group", styles["contact-item"]].join(' ')}>
              <input type="text" id="contactName" name="name" className={"form-control " + (nameError ? styles["contact-item-error"] : null)} maxLength="250" placeholder="Name"></input>
              <label htmlFor="contactName">Name</label>
            </div>
            <div className={["form-group", styles["contact-item"]].join(' ')}>
              <input type="email" id="contactEmail" name="email" className={"form-control " + (emailError ? styles["contact-item-error"] : null)} maxLength="250" placeholder="Email"></input>
              <label htmlFor="contactEmail">Email</label>
            </div>
            <div className={["form-group", styles["contact-item"]].join(' ')}>
              <textarea type="text" id="contactMessage" name="message" className={"form-control " + (messageError ? styles["contact-item-error"] : null)} rows="8" placeholder="Message"></textarea>
              <label htmlFor="contactMessage">Message</label>
            </div>
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
      <div className={styles.buffer}></div>
    </div>
  );
}

export default Home;