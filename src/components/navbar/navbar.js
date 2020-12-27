import React, { Component } from 'react';
import { Link, Events } from 'react-scroll';
import styles from './navbar.module.scss';
import {
  githubMark,
  linkedinIcon
} from '../../assets';

export default class Navbar extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      console.log('being', arguments);
    })

    Events.scrollEvent.register('end', () => {
      console.log('end', arguments)
    })
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <div className={styles.navbar}>
          <div className={styles.links}>
            <a href="https://github.com/Ksxerity">
              <img className={styles["github-mark"]} src={githubMark}></img>
            </a>
            <a href="https://www.linkedin.com/in/kyle-ki/">
              <img className={styles["linkedin-icon"]} src={linkedinIcon}></img>
            </a>
          </div>
          <div className={styles.content}>
            <div className={['btn', styles.items].join(' ')}>
              <Link to="skills" spy={true} smooth={true} offset={-250} duration={500}>Skills</Link>
            </div>
            <div className={['btn', styles.items].join(' ')}>
              <Link to="experience" spy={true} smooth={true} offset={-250} duration={500}>Experience</Link>
            </div>
            {/* <div className={['btn', styles.items].join(' ')}>
            <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
          </div> */}
            <div className={['btn', styles.items].join(' ')}>
              <Link to="contact" spy={true} smooth={true} offset={-250} duration={500}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}