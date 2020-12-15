import React, { Component } from 'react';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import styles from './navbar.module.scss';

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
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <div className={styles.navbar}>
          <div className={['btn', styles.items].join(' ')}>
            <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link>
          </div>
          <div className={['btn', styles.items].join(' ')}>
            <Link to="experience" spy={true} smooth={true} offset={0} duration={500}>Experience</Link>
          </div>
          <div className={['btn', styles.items].join(' ')}>
            <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
          </div>
          <div className={['btn', styles.items].join(' ')}>
            <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
          </div>
        </div>
      </div>
    )
  }
}